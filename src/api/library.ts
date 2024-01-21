import cheerio from "cheerio"
import { Request, Response } from "express"
import { fetchData } from "../fetch"
//import { Genders } from "../enums/enums"

interface MangasData {
    status: number;
    data: Array<{}>;
}

interface Params{
    page: number;
    search: string,
    types: string,
    demography: string,
    webcomic: string,
    genders: string[],
}

//type params = object;

export const library = async (req: Request, res: Response) => {
    try {
	let param = req.query;

	let UrlParams: Params = {
	    page: Number(param.page) || 1,
	    search: String(param.title) || "",
	    types: String(param.types) || "",
	    demography: String(param.demography) || "",
	    webcomic: String(param.webcomic) || "",
	    genders: param.genders as string[] || "",
	}


	let gendersUrl = UrlParams.genders.map(x => `&genders%5B%5D=${x}`).join("");

	let URL = `https://lectormanga.com/library?title=${UrlParams.search}&page=1&type=&demography=&webcomic=${gendersUrl}`;

	let manga: MangasData = {
	    status: 200,
	    data: new Array(),

	};

	const response = await fetchData(URL)

	const data = await response.text()
	const $ = cheerio.load(data);
	console.log()
	$(".col-6.col-md-3.col-lg-3.mt-2 .card").each((_, el) => {
            const title = $(el).find("a").text().trim();
            const href = $(el).find("a").attr("href");
            const img = $(el).find("img").attr("src");
            const types = $(el).find("span.float-right").text().trim();
            
            manga.data.push({ title, href, img, types });
	});

	return res.json(JSON.stringify(manga));
    }catch(ex){
	return res.json({error: "Error" + ex})
    }
    
} 

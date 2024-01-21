import cheerio from "cheerio"
import {Request, Response} from "express"
import {fetchData} from "../fetch"

interface MangaData {
    status:number;
    data: {};
}

export const MangaInfo = async (req: Request,res: Response) =>{
    try{
	let code = req.params.code
	let URL = `https://lectormanga.com/library/*/${code}/*`

	let manga: MangaData = {
	    status:200,
	    data: {},
	}

	const response = await fetchData(URL);
	const data= await response.text();

	const $ = cheerio.load(data);

	$("#app > div > div:nth-child(2) > div > div > div:nth-child(1)").each((_, el) => {
	    const title = $(el).find("h1.text-dark").text().trim();
	    const description = $(el).find("div.col-12.mt-2 > p").text().trim();
	    const type = $(el).find("h5:nth-child(2) > span").text().trim();
	    const state = $(el).find(".status-publishing").text().trim();
	    const img = $(el).find("img").attr("src");

	    //Generos
	    const genders: string[] = [];
	    $(el).find("div.col-12.col-sm-9 > a").map((_, el) => genders.push($(el).text().trim()));

	    //Sinonimos
	    const synonimous: string[] = [];
	    $(el).find("div.col-12.col-sm-9 > span").map((_, el) => synonimous.push($(el).text().trim()));


	    manga.data = { title, description, img, type, state, genders, synonimous };
	});

	// Capitulos 
	let chapters: Array<object> = [];
	let chapterInfos = $("#chapters .chapter-list")

	$("#chapters h4.text-truncate").each((id, el) => {
	    
	    let title = $(el).text().trim()
	    let date = $(chapterInfos[id]).find("li:nth-child(1) > div > div.col-6.col-sm-6.col-md-2.text-center > span").text().trim()
	    let link = $(chapterInfos[id]).find("li:nth-child(1) > div > div.col-6.col-sm-2.text-right > a").attr("href");

	    chapters.push({ id, title, date, link });
	});

	manga.data = { ...manga.data, chapters }
	return res.json(JSON.stringify(manga))
    }catch(ex){
	return res.json({error:"Error"+ex})
    }
}
1

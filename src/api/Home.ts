import {Request, Response } from "express";
import cheerio from "cheerio"
import { fetchData } from "../fetch";

interface HomeData {
    status:number;
    populares: Array<{}>;
    trending: Array<{}>;
}
export const Home = async(_req:Request,res:Response) => {
    try {
	let manga: HomeData = {
	    status: 200,
	    populares: new Array(),
	    trending: new Array(),
	}
	const url:string = "https://lectormanga.com"
	const response = await fetchData(url as string)

	const data = await response.text()
	const $ = cheerio.load(data)
	
	//Populares
	$(
	    "#app > div > div:nth-child(2) > div.col-12.col-lg-8 > div:nth-child(2) .card"
	).each((_item, el) => {
	    
	    const title = $(el).find("a").text().trim();
	    const href = $(el).find("a").attr("href");
	    
	    const img = $(el).find("img").attr("src");
	    const type = $(el).find("span.float-right").text().trim();

	    manga.populares.push({ title, href, img, type });
	});

	//Trending
	$(".row.mt-2 .card").each((_item, el) => {
	    
	    const title = $(el).find("a").text().trim();
	    const href = $(el).find("a").attr("href");
	    
	    const img = $(el).find("img").attr("src");
	    const types = $(el).find("span.float-right").text().trim();

	    manga.trending.push({ title, href, img, types });
	});



	return res.json(JSON.stringify(manga))
    }catch(ex){
	return res.json({error: ex})
    }
    
}


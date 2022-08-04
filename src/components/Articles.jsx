
import { Link } from "react-router-dom";

import React, { useState, useEffect } from "react";

import axios from "axios"

let endPoint = "https://newsapi.org/v2/top-headlines";

let Articles = () => {


    const [articles, setArticles] = useState([]);


    useEffect(
        () => {
            try {
                const fetchDataArticles = async () => {
                    const response = await axios({
                        method: 'get',
                        url: endPoint,
                        params: {
                            country: 'id',
                            apiKey: 'fd8b814d6e26416092c0176203d38606'
                        }
                    });
                    setArticles(response.data.articles)
                }
                fetchDataArticles();
            } catch (err) {
                console.log("Error", err);
            }
        }, []
    )

    return (
        <>
            <section className="overflow-hidden text-gray-700 my-10">
                <div className="">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="max-w-2xl mx-auto py-16 sm:py-24 lg:py-32 lg:max-w-none">
                            <h2 className="text-2xl font-extrabold text-gray-900">Article</h2>
                            <div className="mt-6 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-6">
                                {
                                    articles.map((article, key) => {
                                        return (
                                            <div className="group relative">
                                                <div className="relative w-full h-80 bg-white rounded-lg overflow-hidden group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
                                                    <img src={article.urlToImage} alt="Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug." className="w-full h-full object-center object-cover" />
                                                </div>
                                                <h3 className="mt-3 mb-10 text-sm text-gray-500">
                                                    <Link to="/detail">
                                                        <span className="absolute inset-0" />
                                                        {article.title}
                                                    </Link>
                                                </h3>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>

            </section>
        </>
    )
}

export default Articles;
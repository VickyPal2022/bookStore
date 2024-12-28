import { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from "./Cards";
import axios from "axios";

function FreeBook() {
    const [books, setBooks] = useState([]);
    useEffect(()=>{
        const getBooks = async () => {
            try {
                const res = await axios.get("http://localhost:3001/book");
                setBooks(res.data.filter((data) => data.category === "Free"));
            } catch (error) {
                console.log(error);
            }
        };
        getBooks();
    },[]);


    

    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 pt-10">
            <div>
                <h1 className="font-semibold text-xl pb-2">Free Offered Books</h1>
                <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius, ducimus
                    suscipit optio nesciu sed ex corporis, dicta eligendi praesentium,
                    blanditiis exercitationem tempore nostrum? Ea facere corrupti sit rerum?
                </p>
                <br />
                <br />
            </div>

            
                <Slider {...settings}>
                    {books.map((item) => (
                        <Cards item={item} key={item.id} />
                    ))}
                </Slider>
           
        </div>
    );
}

export default FreeBook;

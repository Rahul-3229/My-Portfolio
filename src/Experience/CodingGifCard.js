import "./CodingGifCard.css";

export default function CodingGifCard({GifSource,GifImage,GifWidth,GifHeight,GifLeft,GifTop,GifCardWidth,GifCardHeight})
{
    return (
        <>
        <div className="CodingGifCard" style={{width:`${GifCardWidth}vw`, height:`${GifCardHeight}vh`}}>
        <img src={GifSource} className="Gif" style={{width:`${GifWidth}%`,height:`${GifHeight}vh`,left:`${GifLeft}%`,top:`${GifTop}vh`}} ></img>
        <img src={GifImage} className="GifImage"></img>
        </div>
        </>
    )
}
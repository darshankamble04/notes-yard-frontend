import React, { useRef, useState } from 'react'
import NotebookCover from '../screens/myNotebooks/components/NotebookCover'

export const notebookCoverUrl = [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbCbawr_3aVyp4oPkmLkPXuPolV8idSbjiCg&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVGyeJ286i4qFaY3BXhUXBSPcIsUON15zUoQ&usqp=CAU",
    "https://c0.wallpaperflare.com/preview/76/943/601/4k-wallpaper-architecture-background-black.jpg",
    "https://c4.wallpaperflare.com/wallpaper/863/982/537/digital-art-pattern-blue-background-minimalism-wallpaper-thumb.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSeUYfHbBGy6e02BXlEJvoLKYLsvpqUk7bCA&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfeFtpMqmxAp-XS0sLdeVxkZilZ-YqGTu2oQ&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvYMiwz9oy-VF2G7PkRiPoYIvsH_xq-ajXYJT-VSbSRzwa1WTD5GUygOqgEONH4VzbchU&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNz-XfKhmur7WFQtqcZJhv6p7nXI3Gqocc4g&usqp=CAU",
    "https://c4.wallpaperflare.com/wallpaper/348/135/723/simple-background-digital-art-minimalism-wallpaper-thumb.jpg",
    "https://c4.wallpaperflare.com/wallpaper/347/341/72/dictionaries-black-minimalism-quote-wallpaper-thumb.jpg",
    "https://c4.wallpaperflare.com/wallpaper/413/925/249/minimalism-abstract-pattern-digital-art-wallpaper-thumb.jpg",
    "https://wallpaperbat.com/img/4306-iron-man-mask-desktop-wallpaper-62758-1920x1080px.jpg",
    "https://wallpaperbat.com/img/580964-avengers-minimal-logo-iphone-hd-4k-wallpaper-data-src-avengers-logo-wallpaper-hd-for-mobile-hd-wallpaper-background-download.jpg",
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAACoCAMAAABt9SM9AAAAA1BMVEX/pgDhvxJYAAAAR0lEQVR4nO3BAQEAAACCIP+vbkhAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAO8GxYgAAb0jQ/cAAAAASUVORK5CYII=",
    "https://wallpaperaccess.com/full/1467836.jpg",
    "https://wallpaperaccess.com/full/1756508.jpg",
    "https://wallpaperaccess.com/full/1756374.jpg",
    "https://drive.google.com/uc?id=1shZbofawsZnOQxZboA1YleSkMvi_TXdP",
]


const CoverImgs = (props) => {
    const { setnotebookCover, notebookCover } = props
    const [isImgUpoloaded, setIsImgUpoloaded] = useState(1)
    const [imgUrl, SetImgUrl] = useState("")
    // value="" onKeyDown={()=>{return false}} 
    const autoClick = useRef(null)
    // CODE FOOR IMG UPLOADER
    const imageForm = document.querySelector("#imageForm")
    const imageInput = document.querySelector("#imageInput")

    const handelClick = async (event) => {
        event.preventDefault()
        const file = imageInput.files[0]

        // get secure url from our server
        const { url } = await fetch("http://localhost:5000/s3Url").then(res => res.json())
        console.log(url)

        // post the image direclty to the s3 bucket
        await fetch(url, {
            method: "PUT",
            headers: {
                "Content-Type": "multipart/form-data"
            },
            body: file
        })

        const imageUrl = url.split('?')[0]
        console.log(imageUrl)
        SetImgUrl(imageUrl)

        // post requst to my server to store any extra data


        const img = document.createElement("img")
        img.src = imageUrl
        document.body.appendChild(img)
    }
    // END


    return (
        <>
            <div className={`coverImg text-center imgUploderBox d-center`}>
                <label onClick={()=>{autoClick.current.click()}} style={{ paddingTop: "5px" }} className="c-pointer" >Custom cover</label>

                <input ref={autoClick} onChange={(e)=>{setIsImgUpoloaded(0);console.log(e)}} placeholder="img" style={{display:"none"}} id="imageInput" type="file" accept="image/*" />
                
                <button disabled={isImgUpoloaded} className='imgUploadBtn addNotebookbtn'>Upload</button>
            </div>

            <NotebookCover url={imgUrl} notebookCover={notebookCover} setnotebookCover={setnotebookCover} />

            {
                notebookCoverUrl.map((e) => {
                    return (<NotebookCover url={e} notebookCover={notebookCover} setnotebookCover={setnotebookCover} />)
                })
            }
        </>

        //   <div className={`coverImg ${notebookCover === notebookCoverUrl[0] ? "addAfter" : ""}`} onClick={() => { setnotebookCover(notebookCoverUrl[0]) }} style={{ background: `url(${notebookCoverUrl[0]})` }}></div>

    )
}
export default CoverImgs;

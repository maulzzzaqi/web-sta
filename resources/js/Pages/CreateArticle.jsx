import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { Editor } from "@tinymce/tinymce-react";
import { useForm } from "@inertiajs/inertia-react";

export default function CreateArticle() {

    const { data, setData, post, errors, reset, processing } = useForm({
        title: '',
        body: '',
        thumbnail: ''
    })

    const [isOpen, setIsOpen] = useState(false)

    function onSubmitEventHandler(e) {
        e.preventDefault()
        post("/articles", { onSuccess: () => reset() })
    }


    function openModalEventHandler() {
        setIsOpen(!isOpen)
        console.log(isOpen)
    }

    return (
        <>
            <Navbar />
            <form className="mt-24" onSubmit={onSubmitEventHandler} encType="multipart/form-data">
                {
                    isOpen &&
                    <>
                        <div className="fixed inset-0 flex items-center justify-center z-40">
                            <div className="p-4 rounded-lg flex flex-col bg-white text-black z-50 relative">
                                <div onClick={openModalEventHandler} className="hover:cursor-pointer absolute -top-2 -right-2 shadow-md p-2 bg-white  rounded-full">
                                    <img src="/icon/closeIcon.svg" className="w-4" />
                                </div>
                                <h2 className="text-2xl font-semibold">Create Article</h2>
                                <label htmlFor="title" className="mt-5 text-sm">Title:</label>
                                <input type="text" id="title" className=" rounded-lg border py-2 px-3 " value={data.title} onChange={(e) => setData('title', e.target.value)} />
                                
                                <label htmlFor="thumbnail" className="mt-5 text-sm">Thumbnail:</label>
                                <input type="file" className="mt-2" id="thumbnail" onChange={(e) => setData('thumbnail', e.target.files[0])} />
                                
                                <button type="submit" disabled={processing} className={`mt-4 py-2 px-4 bg-darkerBlue rounded-lg text-white hover:bg-blue-500 hover:transition ${processing && 'opacity-25'}`}>Create Article</button>
                                {errors.title &&
                                    <p className="mt-2 text-sm text-red-700">{errors.title}</p>
                                }
                                {errors.body &&
                                    <p className="mt-2 text-sm text-red-700">{errors.body}</p>
                                }
                                {errors.thumbnail &&
                                    <p className="mt-2 text-sm text-red-700">{errors.thumbnail}</p>
                                }
                            </div>
                            <div onClick={openModalEventHandler} className="fixed inset-0 bg-black opacity-35"></div>
                        </div>
                    </>
                }
                <h1 className="text-5xl font-semibold text-center py-10 shadow-lg">Write new article here!</h1>
                <Editor
                    apiKey='5d3gmavobfl1gplfh7eithg9chuj3shiru72msgp1kescjzi'
                    init={{
                        toolbar: 'undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | table  | addcomment showcomments |  align lineheight | checklist numlist bullist indent outdent |  charmap | removeformat',
                        height: 520,
                    }}
                    value={data.body}
                    onEditorChange={(newValue, editor) => setData('body', newValue)}
                />

                <div onClick={openModalEventHandler} className="hover:bg-blue-900 hover:cursor-pointer bg-blue-700 text-white transition fixed right-3 mt-5 px-6 py-2 rounded-lg card-shadow">
                    Save
                </div>
            </form>

        </>
    )
}
import React from "react";
import ContactForm from "./components/ContactFrom";

export default function About() {
    // Create some Variables!

    return (
        <>
            <main className="flex flex-col items-center gap-16 max-w-sm mx-auto sm:max-w-3xl / border border-red-600">
                {/* hero */}
                <div>
                    <h1 className="">Title</h1>
                    <p>Text</p>
                    <img src="" alt="" />
                </div>

                {/* Long Time ago */}
                <div>
                    <h2>Title</h2>
                    <p>Text</p>
                    <img src="" alt="" />
                    <p>Text</p>
                </div>


                {/* How Passion Began */}
                <div>
                    <h2>Title</h2>
                    <p>Text</p>
                    <div>
                        <img src="" alt="" />
                        <img src="" alt="" />
                        <img src="" alt="" />
                    </div>
                    <p>Text</p>
                </div>

                {/* Professional Growth */}
                <div>
                    <h2>Title</h2>
                    <p>Text</p>
                    <img src="" alt="" />
                    <p>Text</p>
                </div>

                {/* Let's Create Something Together */}
                <div>
                    <h2>Title</h2>
                    <p>Text</p>
                </div>

                <ContactForm />
            </main>
        </>
    )
}
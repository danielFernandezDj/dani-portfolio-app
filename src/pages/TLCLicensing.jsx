import React from "react"
import CardsData from "../components/CardsData"


export default function TLCLicensing() {
    const cardData = CardsData()
    const bottomColor = {
        primary: '#E2E065',
        secondary: 'bg-slate-800'
    }

    return (
        <>
            <main className="container mx-auto px-4 flex flex-col gap-20">
                <section className="flex flex-col items-center gap-4 mt-4 pt-4 rounded-t-xl text-slate-800
                    bg-gradient-to-b from-[#E2E065] to-slate-50"
                >
                    <strong className="text-5xl">
                        TLC Licensing
                    </strong>
                    <p className="text-center px-4 md:w-4/6">
                        A comprehensive web platform integrating cutting-edge front-end, back-end, and database
                        technologies with secure, robust server infrastructure to deliver a seamless and reliable user experience.
                    </p>
                    <img
                        src="projects-img/tlc.png"
                        alt="TLC Licensing Home page Screenshot."
                        className="rounded-md"
                    />
                    {cardData.length > 0 && (
                        <a
                            href={cardData[0].liveLink}
                            target="_blank"
                            className="w-5/6 md:w-2/6 m-auto p-4 text-xl text-center font-semibold rounded-md"
                            style={{ backgroundColor: bottomColor.primary }}
                        >
                            Live Web Site➚
                        </a>
                    )}

                </section>

                <section>
                    <div>
                        <strong>
                            Project Purpose and Goal
                        </strong>
                        <p>
                            This project encompassed three critical phases of site development and integration:
                        </p>
                    </div>
                    <div>
                        <div>
                            <p>
                                Phase 1: The Biggest Challenge
                            </p>
                            <p>
                                Establishing a secure connection between the front-end application and back-end system,
                                protecting against potential cyber threats. The previous application had been vulnerable,
                                experiencing over 1,000 hacking attempts monthly. Our primary goal was to implement robust security
                                measures that would shield the entire system from unauthorized access.
                            </p>
                        </div>

                        <div>
                            <p>
                                Phase 2: Ensuring Stable and Secure Connectivity
                            </p>
                            <p>
                                Developing the most effective strategy to maintain a stable and secure connection between the server and database.
                                This involved implementing advanced encryption protocols and creating multiple layers of authentication to prevent
                                potential breaches.
                            </p>
                        </div>

                        <div>
                            <p>
                                Phase 3: Advanced Server Port Management
                            </p>
                            <p>
                                Designing a sophisticated system focused on server entry point security, ensuring data integrity and protection.
                                We developed comprehensive security protocols that monitor, filter, and validate all incoming and outgoing data transactions.
                            </p>
                        </div>
                    </div>
                </section>

                <section>
                    <img src="" alt="" />
                    <img src="" alt="" />
                    <img src="" alt="" />
                </section>

                <section className="container mx-auto px-4">
                    <strong>
                        Web Stack and Explanation
                    </strong>
                    <p>
                        React was the optimal choice for our web application due to its flexibility and seamless back-end integration,
                        ensuring a smooth and efficient working environment. Its component-based architecture allows for dynamic and
                        responsive user interfaces that can easily communicate with server-side resources.
                    </p>
                    <p>
                        For the complexity of transactions and account management, we utilized React Hooks with Redux to centralize and
                        organize all cart items and user tasks in a single, cohesive state management system. This approach provides a
                        robust and predictable way to handle complex application logic, enabling efficient data flow and user experience.
                    </p>

                    <div>
                        <p>
                            Shopping Cart
                        </p>
                        <img src="" alt="" />
                        <img src="" alt="" />
                    </div>
                </section>

                <section>
                    <strong>
                        Lessons Learned
                    </strong>
                    <p>
                        I could spend hours describing the invaluable lessons learned while working on this project.
                        The most significant insights came from my deep dive into React Hooks, Git management, Feature Keys,
                        and API integration. As my first large-scale React project, it became a transformative learning
                        experience that reshaped my approach to software development.
                        <br />
                        Initially, I was prone to writing hasty, unstructured code and quickly moving on. However, this project
                        taught me a critical lesson: poor code organization can create significant challenges down the line. Now,
                        I invest substantial time in refactoring and meticulously improving every line of code I write. My focus
                        has shifted to ensuring maximum readability and maintainability, which ultimately prevents future headaches
                        and creates more robust, elegant solutions.
                        <br />
                        This project was more than just a technical challenge—it was a personal growth journey that fundamentally
                        changed how I approach software development, emphasizing the importance of clean, thoughtful code and
                        strategic project management.
                    </p>
                </section>

                <section>
                    <strong>
                        Other Projects
                    </strong>

                    {/* Projects card goes here! */}

                </section>

            </main>
        </>
    )
}
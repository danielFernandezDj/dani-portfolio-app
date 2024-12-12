import React from "react"


export default function TLC() {
    const type = 'algo'

    return (
        <>
            <main className="container">
                <section className="container">
                    <Strong>
                        TLC Licensing
                    </Strong>
                    <p>
                        A comprehensive web platform integrating cutting-edge front-end, back-end, and database
                        technologies with secure, robust server infrastructure to deliver a seamless and reliable user experience.
                    </p>
                    <img
                        src=""
                        alt=""
                    />
                </section>

                <section className="container">
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

                <section className="container flex gap-4">
                    <img src="" alt="" />
                    <img src="" alt="" />
                    <img src="" alt="" />
                </section>

                <section className="container">
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

                <section className="container">
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

                <section className="container">
                    <strong>
                        Other Projects
                    </strong>

                    {/* Projects card goes here! */}

                </section>

            </main>
        </>
    )
}
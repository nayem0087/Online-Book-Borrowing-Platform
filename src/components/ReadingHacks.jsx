"use client";

import { FcReading } from "react-icons/fc";

const ReadingHacks = () => {
    return (
        <section className="max-w-7xl mx-auto px-4">

            <div className="mb-12 text-center">
                <h2 className="text-3xl font-bold flex items-center justify-center gap-1"> <FcReading /> Smart Reading Hacks</h2>
                <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
                    Improve your reading skills with simple but powerful habits that help you focus better, these tips are designed
                    to make reading more effective and enjoyable in your daily life.
                </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">

                <div>
                    <h3 className="font-semibold text-lg mb-2">Set a daily reading goal</h3>
                    <p className="text-gray-600 text-sm">
                        Set a realistic target like pages or minutes per day. This builds a strong reading habit
                        and keeps you consistent even on busy days.
                    </p>
                </div>

                <div>
                    <h3 className="font-semibold text-lg mb-2">Create a distraction-free space</h3>
                    <p className="text-gray-600 text-sm">
                        Choose a calm environment where you can fully concentrate. Keep your phone away to avoid
                        interruptions while reading.
                    </p>
                </div>

                <div>
                    <h3 className="font-semibold text-lg mb-2">Use bookmarks or notes</h3>
                    <p className="text-gray-600 text-sm">
                        Highlight important ideas or write short notes while reading. This helps you recall key
                        information more easily later.
                    </p>
                </div>

                <div>
                    <h3 className="font-semibold text-lg mb-2">Read at your best time</h3>
                    <p className="text-gray-600 text-sm">
                        Find the time of day when your mind is most active and focused. Reading at the right time
                        improves understanding and retention.
                    </p>
                </div>

                <div>
                    <h3 className="font-semibold text-lg mb-2">Preview before reading</h3>
                    <p className="text-gray-600 text-sm">
                        Skim headings, summaries, and key points first. It gives you a clear idea of what you are
                        going to learn.
                    </p>
                </div>

                <div>
                    <h3 className="font-semibold text-lg mb-2">Take short breaks</h3>
                    <p className="text-gray-600 text-sm">
                        Avoid long continuous reading sessions. Short breaks help your brain reset and improve focus.
                    </p>
                </div>

                <div>
                    <h3 className="font-semibold text-lg mb-2">Read aloud sometimes</h3>
                    <p className="text-gray-600 text-sm">
                        Reading aloud improves attention and helps you understand complex ideas more clearly.
                    </p>
                </div>

                <div>
                    <h3 className="font-semibold text-lg mb-2">Keep a reading list</h3>
                    <p className="text-gray-600 text-sm">
                        Maintain a list of books you want to read. It keeps you organized and motivated to continue reading.
                    </p>
                </div>

                <div>
                    <h3 className="font-semibold text-lg mb-2">Avoid too much rereading</h3>
                    <p className="text-gray-600 text-sm">
                        Try to focus on understanding the first time instead of repeating lines again and again.
                    </p>
                </div>

                <div>
                    <h3 className="font-semibold text-lg mb-2">Use finger tracking</h3>
                    <p className="text-gray-600 text-sm">
                        Move your finger along the text to guide your eyes. This can help increase reading speed and focus.
                    </p>
                </div>

                <div>
                    <h3 className="font-semibold text-lg mb-2">Discuss what you read</h3>
                    <p className="text-gray-600 text-sm">
                        Talking about what you read with others strengthens your understanding and memory.
                    </p>
                </div>

                <div>
                    <h3 className="font-semibold text-lg mb-2">Stay consistent</h3>
                    <p className="text-gray-600 text-sm">
                        Even small daily reading builds long-term habits. Consistency matters more than quantity.
                    </p>
                </div>

            </div>
        </section>
    );
};

export default ReadingHacks;
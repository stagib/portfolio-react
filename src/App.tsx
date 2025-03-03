import Header from "./components/Header";

function App() {
    return (
        <div className="flex flex-col items-center">
            <Header />

            <div className="w-full max-w-5xl p-4 sm:p-8">
                <div className="mb-4 text-lg font-semibold">Projects</div>
                <div className="flex flex-col gap-4">
                    <div className="flex w-full overflow-hidden rounded-lg bg-stone-900">
                        <div className="h-64 w-64 bg-stone-400"></div>
                        <div className="p-4">SD</div>
                    </div>
                    <div className="flex w-full overflow-hidden rounded-lg bg-stone-900">
                        <div className="h-64 w-64 bg-stone-400"></div>
                        <div className="p-4">SD</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;

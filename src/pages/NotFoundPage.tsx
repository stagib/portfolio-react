import Bar from "../components/Bar";
import Container from "../components/Container";
import HomeButton from "../components/HomeButton";

const NotFoundPage = () => {
    return (
        <div className="flex flex-col items-center">
            <Container>
                <Bar>
                    <HomeButton />
                </Bar>
                <div className="bg-stone-800 p-4 rounded-md flex flex-col border-l-8 border-stone-200">
                    <div className="flex gap-2 items-center mb-1">
                        <div className="font-semibold text-lg">500</div>
                        <div>Failed to load experiences</div>
                    </div>
                    <div className="text-stone-300 text-sm">
                        Try refreshing the page
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default NotFoundPage;

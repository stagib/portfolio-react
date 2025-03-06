import Container from "../components/Container";

const NotFoundPage = () => {
    return (
        <div className="flex flex-col items-center">
            <Container>
                <div className="bg-stone-800 p-4 rounded-md w-full flex flex-col border-l-8 border-stone-200">
                    <div className="flex gap-2 items-center mb-1">
                        <div className="font-semibold text-lg">404</div>
                        <div>Page not found</div>
                    </div>
                    <div className="text-stone-300 text-sm">
                        The page you requested was not found
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default NotFoundPage;

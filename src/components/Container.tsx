interface Props {
    id?: string;
    children: React.ReactNode;
}

const Container: React.FC<Props> = ({ id, children }) => {
    return (
        <section className="w-full max-w-3xl  p-4 sm:p-8 mb-12" id={id}>
            {children}
        </section>
    );
};

export default Container;

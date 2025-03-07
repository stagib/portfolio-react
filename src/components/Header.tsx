import { FormkitEmail } from "../icons/FormkitEmail";
import { SimpleIconsGithub } from "../icons/SimpleIconsGithub";
import Container from "./Container";

const Header = () => {
    return (
        <Container>
            <div className="flex w-full justify-between">
                <div>
                    <div className="mb-1 text-2xl font-semibold">Song Tran</div>
                    <div className="text-stone-400">Full stack developer</div>
                    <div className="text-xs text-stone-400">
                        Melbourne, Australia
                    </div>
                </div>

                <div className="flex items-start gap-2">
                    <a
                        href="https://github.com/stagib"
                        target="_blank"
                        aria-label="github"
                    >
                        <div className="text-lg">
                            <SimpleIconsGithub />
                        </div>
                    </a>

                    <a
                        href="mailto:songtdev@gamil.com"
                        target="_blank"
                        aria-label="email"
                    >
                        <div className="text-lg">
                            <FormkitEmail />
                        </div>
                    </a>
                </div>
            </div>
        </Container>
    );
};

export default Header;

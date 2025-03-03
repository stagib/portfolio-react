import { FormkitEmail } from "../icons/FormkitEmail";
import { SimpleIconsGithub } from "../icons/SimpleIconsGithub";

const Header = () => {
    return (
        <div className="flex w-full max-w-5xl justify-between p-4 sm:p-8">
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
                    <div className="">
                        <SimpleIconsGithub />
                    </div>
                </a>

                <a href="/" target="_blank" aria-label="email">
                    <div className="">
                        <FormkitEmail />
                    </div>
                </a>
            </div>
        </div>
    );
};

export default Header;

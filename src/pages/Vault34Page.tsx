import HomeSmall from "..//assets/home-small-3.webp";
import SearchLarge from "../assets/catsearch-large-2.webp";
import HomeLarge from "../assets/home-large.webp";
import HomeMedium from "../assets/home-medium.webp";
import HeroImage from "../assets/infinitescroll-1080-c.gif";
import PostSmall from "../assets/post-small.webp";
import SaveSmall from "../assets/save-small.jpg";
import VaultSmall from "../assets/vaults-small.jpg";

const Vault34Page = () => {
    return (
        <div className="flex flex-col items-center">
            <div className="w-full max-w-5xl p-4 sm:p-8 mb-12">
                <div
                    className="w-full bg-center bg-cover h-96 relative rounded-md"
                    style={{ backgroundImage: `url(${HeroImage})` }}
                >
                    <div className="absolute inset-0 bg-stone-950/50 flex items-center justify-center">
                        <div className="text-stone-50 text-2xl font-semibold px-4 py-2 rounded-md backdrop-blur-2xl">
                            Vault34
                        </div>
                    </div>
                </div>
            </div>

            <div className="w-full max-w-5xl p-4 sm:p-8 mb-12">
                <div className="text-xl mb-4 font-semibold">
                    Responsive Design
                </div>
                <div className="text-sm text-stone-300 mb-1">Large screens</div>
                <img
                    className="rounded-md border border-stone-600 mb-8"
                    src={HomeLarge}
                    alt=""
                />

                <div className="flex gap-8">
                    <div>
                        <div className="text-sm text-stone-300 mb-1">
                            Medium screens
                        </div>
                        <img
                            className="rounded-md border max-h-96 border-stone-600"
                            src={HomeMedium}
                            alt=""
                        />
                    </div>

                    <div>
                        <div className="text-sm text-stone-300 mb-1">
                            Small screens
                        </div>
                        <img
                            className="rounded-md border max-h-96 border-stone-600"
                            src={HomeSmall}
                            alt=""
                        />
                    </div>
                    <div>
                        <div className="text-sm text-stone-300 mb-1">
                            Small screens
                        </div>
                        <img
                            className="rounded-md border max-h-96 border-stone-600"
                            src={PostSmall}
                            alt=""
                        />
                    </div>
                </div>
            </div>

            <div className="w-full max-w-5xl p-4 sm:p-8 mb-12">
                <div className="text-xl mb-4 font-semibold">
                    Organize ideas with vaults
                </div>
                <div className="flex w-full overflow-hidden rounded-lg h-fit sm:h-64 mb-8 bg-stone-900 flex-col sm:flex-row">
                    <div className="w-full sm:w-96 bg-stone-500 shrink-0 p-4">
                        <img src={VaultSmall} alt="" />
                    </div>
                    <div className="p-4 flex flex-col w-full">
                        <div className="text-lg font-semibold mb-1">Vaults</div>
                        <div className="text-sm text-stone-300">
                            Manage your favourite posts into customizable
                            vaults. Organize content by themes, moods, or
                            inspirations, making it simple to revisit and share
                            later. Whether you're curating ideas or collecting
                            references, vaults help keep everything in one
                            place.
                        </div>
                    </div>
                </div>
                <div className="flex w-full overflow-hidden rounded-lg h-fit sm:h-64 bg-stone-900 flex-col sm:flex-row">
                    <div className="w-full sm:w-96 bg-stone-500 shrink-0 p-4">
                        <img src={SaveSmall} alt="" />
                    </div>
                    <div className="p-4 flex flex-col w-full">
                        <div className="text-lg font-semibold mb-1">Saving</div>
                        <div className="text-sm text-stone-300">
                            Found something inspiring? Save posts with a single
                            click and access them anytime. Easily organize your
                            saved content into vaults for better categorization
                            and quick reference. Never lose track of the ideas
                            that matter to you!
                        </div>
                    </div>
                </div>
            </div>

            <div className="w-full max-w-5xl p-4 sm:p-8 mb-12">
                <div className="text-xl mb-4 font-semibold">
                    Search with tags
                </div>
                <div className="text-sm text-stone-300 mb-1">Cats!</div>
                <img
                    className="rounded-md border border-stone-600"
                    src={SearchLarge}
                    alt=""
                />
            </div>
        </div>
    );
};

export default Vault34Page;

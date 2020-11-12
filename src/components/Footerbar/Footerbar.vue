<template>
    <footer>
        <div class="top-line"></div>
        <!-- links -->
        <div class="flex flex-col flex-wrap mt-6 text-gray-300 xl:flex-row xl:mt-8 xl:mb-8">
            <div v-for="(list, index) in lists" :key="list" class="flex flex-col xl:w-2/12 list">
                <div class="flex items-center justify-between mb-4 xl:mb-0">
                    <h4 class="text-lg font-semibold capitalize xl:mb-2 xl:text-md">
                        {{ list.title }}
                    </h4>
                    <div class="xl:hidden">
                        <i class="fa fa-chevron-down " aria-hidden="true"></i>
                    </div>
                </div>
                <ul class="leading-8">
                    <li
                        v-for="item in lists[index].items"
                        :key="item"
                        class="hidden text-sm capitalize xl:block"
                    >
                        {{ item }}
                    </li>
                </ul>
            </div>
        </div>
        <!-- socials -->
        <div class="grid grid-cols-1 pt-6 mb-40 xl:mb-0 xl:grid-cols-2 socials">
            <div class="w-full text-xl font-bold text-white lg:w-50">
                Follow Us
                <div class="justify-between mt-4 mb-10 text-2xl md:w-1/2 md:text-3xl lg:flex xl:justify-start">
                    <i class="mr-12 fa fa-facebook-square" aria-hidden="true"></i>
                    <i class="mr-12 fa fa-twitter" aria-hidden="true"></i>
                    <i class="mr-12 fa fa-pinterest" aria-hidden="true"></i>
                    <i class="mr-12 fa fa-instagram" aria-hidden="true"></i>
                    <i class="fa fa-snapchat" aria-hidden="true"></i>
                </div>
            </div>
            <div class="text-xl font-semibold text-white w-50 dl-section">
                Download the Redbox App
                <div class="text-xs font-normal small-text">Rent From Anywhere</div>
                <div class="flex items-center h-50">
                    <img
                        class="mt-2 mr-4 dlbtn"
                        src="https://greatex.org/wp-content/uploads/2019/07/Download-on-the-App-Store-button.png"
                        alt=""
                    />
                    <img
                        class="mt-2 mr-8 dlbtn"
                        src="https://www.vogo-group.com/wp-content/uploads/2018/01/google-chplay.png"
                        alt=""
                    />
                </div>
            </div>
        </div>
        <!-- policies -->
        <div class="mt-56 text-white xl:mt-20 policies">
            <img class="w-40 logo" src="../../assets/images/logo.png" alt="" />
            <div class="text-tiny">
                Use of this service and this website constitutes acceptance of our:
            </div>
            <ul class="flex flex-wrap ">
                <li v-for="policy in policies" :key="policy" class="leading-7 capitalize">
                    {{ policy }}
                </li>
            </ul>
            <div class="bottom-line"></div>
            <div class="text-white text-tiny footer-text">
                © 2020 SuperVision Design, Redbox Automated Retail, LLC. All rights reserved. <br />
                REDBOX and its associated logos are trademarks of Redbox Automated Retail, LLC.
            </div>
        </div>
    </footer>
</template>

<script>
export default {
    name: "Footerbar",
    data() {
        return {
            lists: [
                {
                    title: "at the box",
                    items: [
                        "new",
                        "movies to rent",
                        "movies to own",
                        "genres",
                        "collections",
                        "coming soon",
                    ],
                },
                {
                    title: "on demand",
                    items: ["featured", "new", "genres", "coming soon", "what is on demand"],
                },
                { title: "free live TV", items: ["on now", "what is free live TV"] },
                {
                    title: "more",
                    items: ["redbox perks", "redbox unscripted", "gift cards", "site map"],
                },
                { title: "my redbox", items: ["sign in", "sign up"] },
                { title: "locations", items: ["find a box"] },
                { title: "help", items: ["help center", "contact us"] },
                {
                    title: "about",
                    items: ["media center", "about redbox", "careers", "advertise with us"],
                },
                { title: "deals", items: ["our top deals", "at the box deals", "on demand deals"] },
            ],
            policies: [
                "privacy policy",
                "CA privacy notice",
                "do not sell my personal info",
                "terms of use",
                "rewards terms",
                "referral",
                "terms",
                "transaction terms and conditions",
                "on demand service terms",
            ],
        }
    },
}
</script>

<style lang="scss">
footer {
    height: auto;
    background: black;
    padding: 0 1.5rem;
    max-width: 1460px;
    display: flex;
    flex-direction: column;
    @include xl {
        padding: 0 7.5rem;
        margin: 0 auto;
    }
    @include fourk {
        padding: 0;
    }
    .top-line {
        padding-top: 2rem;
        border-bottom: 1px solid #513a5a;
        /* margin: 0 7.5rem; */
    }
    .list:nth-child(7),
    .list:nth-child(8),
    .list:nth-child(9) {
        @include xl {
            margin-top: 3rem;
        }
    }
    .socials {
        @include xl {
            margin: 0 12.5rem;
        }
        height: 122px;
        margin-top: 1rem;
        font-family: "Zilla Slab";
        .small-text {
            font-family: Montserrat;
        }
    }
    .policies {
        height: auto;
        display: grid;
        margin-top: 3rem;
        padding-bottom: 1rem;
        grid-template-rows: 44px 13px auto;
        grid-gap: 0.75rem;
        li::after {
            content: " \00b7";
            padding-left: 1rem;
            padding-right: 1rem;
        }
        li:last-child::after {
            content: "";
        }
    }
    .bottom-line {
        border-bottom: 1px solid #513a5a;
        /* padding-top: 5rem; */
        padding-bottom: 1rem;
        @include xl {
            padding-top: 0.5rem;
            /* padding-bottom: 4rem; */
        }
    }
    .footer-text {
        margin-top: 1rem;
        padding-bottom: 2rem;
        color: #b8a1c1;
    }
}
.dlbtn {
    min-height: 50px;
    max-height: 50px;
    min-width: 90px;
}
.dl-section {
    height: 150px;
}
</style>

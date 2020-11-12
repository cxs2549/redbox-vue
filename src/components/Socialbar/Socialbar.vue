<template>
    <section id="socialbar" class="flex flex-col items-center md:flex-row xl:justify-between">
        <div class="flex flex-col items-center justify-center md:flex-row groups">
            <div
                v-for="group in groups"
                :key="group"
                class="mb-16 text-white xl:w-4/12 group lg:mt-12"
            >
                <div class="flex items-start mb-1 text-2xl icon">
                    <i v-if="group.single" :class="'fa fa-' + group.single" aria-hidden="true"></i>
                    <svg-icon v-if="group.icon" :icon="group.icon" />
                </div>
                <div class="text-2xl font-semibold text-center capitalize lg:text-left heading">
                    {{ group.heading }}
                </div>

                <div class="text-sm leading-5 text-center lg:text-left caption">
                    {{ group.caption }}
                </div>

                <div v-if="group.like" class="flex items-center justify-center buttonLike">
                    <button
                        class="flex items-center justify-center text-xs font-semibold bg-blue-700 rounded btn"
                    >
                        <div class="flex items-center justify-center pb-1 mr-2">
                            <i class=" fa fa-thumbs-up" aria-hidden="true"></i>
                        </div>
                        Like
                    </button>

                    <div class="leading-4 text-gray-800 like-caption">
                        4.3K people like this. <a href="/" class="mr-1 text-gray-200 underline">Sign up </a> to see
                        what your friends like.
                    </div>
                </div>
                <button
                    v-if="group.btn"
                    class="mt-3 text-sm text-red-600 capitalize bg-white rounded mainBtn"
                >
                    {{ group.btn }}
                </button>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    data() {
        return {
            groups: [
                {
                    heading: "get social with us",
                    caption: "Connect with Redbox on Facebook to join the conversation",
                    icon: "",
                    single: "facebook-square",
                    like: true,
                },
                {
                    heading: "join redbox text club",
                    caption: "Get members-only deals sent straight to your phone",
                    icon: "",
                    single: "mobile",
                    btn: "join now",
                },
                {
                    heading: "stay in the loop",
                    caption: "Be the first to hear about new releases and special offers by email",
                    icon: "",
                    btn: "sign up",
                    single: "envelope",
                },
            ],
        }
    },
}
</script>

<style lang="scss">
#socialbar {
    height: 750px;
    padding-top: 2rem;
    @include md {
        padding: 2rem 3rem 0 3rem;
        height: 290px;
    }
    @include xl {
        margin: 0 auto;
        padding: 0 7.5rem;
    }
    background: linear-gradient(315deg, #42378f 0%, #f53844 74%);
    color: whitesmoke;
    .groups {
        max-width: 1460px;
        margin: 0 auto;
    }
    .group {
        height: 151px;
        width: 75%;
        font-family: "Zilla Slab";
        /* margin-bottom: 2rem; */
        display: grid;
        grid-template-rows: auto auto auto repeat(1, 1fr);
        grid-template-columns: 1fr;
        grid-template-areas:
            "ic"
            "head"
            "cap"
            "btn";
        @include lg {
            margin-right: 3rem;
            align-items: center;
            grid-template-columns: auto 1fr;
            grid-template-rows: min-content min-content auto;
            grid-gap: 0.25rem 1rem;
            grid-template-areas:
                "ic head"
                ". cap"
                ". btn";
        }
        &:last-child {
            margin-right: 0;
        }
        .heading {
            grid-area: head;
            margin-bottom: 0.25rem;
        }
        .icon {
            grid-area: ic;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        .caption {
            grid-area: cap;
            font-family: Montserrat;
            margin-bottom: 1rem;
            @include md {
                margin-right: 1rem;
            }
            &:last-child {
                margin-right: 3rem;
            }
        }
        .buttonLike {
            grid-area: btn;
            display: flex;
            margin: 0 auto;
            width: 266px;
            @include lg {
                margin: 0;
            }
            font-family: sans-serif;
            .btn {
                height: 28px;
                width: 106px;
                @include lg {
                    width: 110px;
                }
            }
            .like-caption {
                margin-left: 1rem;
                font-size: 0.7rem;
            }
        }
        .mainBtn {
            grid-area: btn;
            width: 103px;
            height: 45px;
            font-family: "Montserrat";
            margin: 0 auto;
            @include lg {
                margin: 0;
            }
        }
    }
}
</style>

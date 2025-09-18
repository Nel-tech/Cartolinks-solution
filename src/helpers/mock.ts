import { HeroCard, IconCard } from "./type"

export const NAV_LINKS = [
  { key: "home", src: "/icons/NavIcons/Home.svg", alt: "Home", active: true },
  { key: "gallery", src: "/icons/NavIcons/Image.svg", alt: "Gallery" },
  { key: "video", src: "/icons/NavIcons/Video.svg", alt: "Video" },
  { key: "enhancer", src: "/icons/NavIcons/Enhancer.svg", alt: "Enhancer" },
  { key: "realtime", src: "/icons/NavIcons/RealTime.svg", alt: "Real-time" },
  { key: "compass", src: "/icons/NavIcons/Edit.svg", alt: "Edit" },
  { key: "assets", src: "/icons/NavIcons/Assets.svg", alt: "Assets" },
];
export const heroCards: HeroCard[] = [
  {
    id: 1,
    title:"WAN 2.2",
    subtitle: "WAN 2.2 Image generation",
    description:
      "Generate complex images with brand new and powerful WAN 2.2 model. Exceptional prompt adherence and ultra-realistic textures.",
    buttonText: "Try WAN 2.2",
       image: "/images/announce-wan.png",
  },
  {
    id: 2,
    title:"Open Source",
    subtitle: "FLUX.1 Krea",
    description:
      "We're making the weights to our FLUX.1 Krea model open-source. Download and run and run our model weights, read technical report or generate with it in Krea image.",
    buttonText: "Try Krea",
       image: "/images/luxury_whiskey_bottle.png",
  },
 {
    id: 3,
     title:"WAN 2.2",
    subtitle: "WAN 2.2 Image generation",
    description:
      "Generate complex images with brand new and powerful WAN 2.2 model. Exceptional prompt adherence and ultra-realistic textures.",
    buttonText: "Try WAN 2.2",
       image: "/images/announce-wan.png",
  },
{
    id: 4,
    title:"Open Source",
    subtitle: "FLUX.1 Krea",
    description:
      "We're making the weights to our FLUX.1 Krea model open-source. Download and run and run our model weights, read technical report or generate with it in Krea image.",
    buttonText: "Try Krea",
       image: "/images/luxury_whiskey_bottle.png",
  },

 {
    id: 5,
   title:"WAN 2.2",
    subtitle: "WAN 2.2 Image generation",
    description:
      "Generate complex images with brand new and powerful WAN 2.2 model. Exceptional prompt adherence and ultra-realistic textures.",
    buttonText: "Try Krea",
       image: "/images/announce-wan.png",
  },
{
    id: 6,
    title:"Open Source",
    subtitle: "FLUX.1 Krea",
    description:
      "We're making the weights to our FLUX.1 Krea model open-source. Download and run and run our model weights, read technical report or generate with it in Krea image.",
    buttonText: "Try Krea",
       image: "/images/luxury_whiskey_bottle.png",
  },
{
    id: 7,
    title:"WAN 2.2",
    subtitle: "WAN 2.2 Image generation",
    description:
      "Generate complex images with brand new and powerful WAN 2.2 model. Exceptional prompt adherence and ultra-realistic textures.",
    buttonText: "Try WAN 2.2",
       image: "/images/announce-wan.png",
  },

  {
    id: 8,
   title:"Open Source",
    subtitle: "FLUX.1 Krea",
    description:
      "We're making the weights to our FLUX.1 Krea model open-source. Download and run and run our model weights, read technical report or generate with it in Krea image.",
    buttonText: "Try Krea",
       image: "/images/luxury_whiskey_bottle.png",
  },

{
    id: 9,
     title:"WAN 2.2",
    subtitle: "WAN 2.2 Image generation",
    description:
      "Generate complex images with brand new and powerful WAN 2.2 model. Exceptional prompt adherence and ultra-realistic textures.",
    buttonText: "Try WAN 2.2",
       image: "/images/announce-wan.png",
  },

  {
    id: 10,
    title:"Open Source",
    subtitle: "FLUX.1 Krea",
    description:
      "We're making the weights to our FLUX.1 Krea model open-source. Download and run and run our model weights, read technical report or generate with it in Krea image.",
    buttonText: "Try Krea",
       image: "/images/luxury_whiskey_bottle.png",
  },

]


export const iconcards: IconCard[] = [
 {
  id: 1,
  title: "Image",
  isNew: true,
  description: "Generate images with custom styles in flux and ideogram",
  buttonText: "Open",
  image: "/icons/GalleryIcons/image.svg",
  style: `
    relative w-[42px] h-[42px] aspect-square rounded-lg
    bg-transparent
    bg-gradient-to-t from-[#d0e3f1] to-[#294962]
    bg-repeat bg-left-top bg-auto
    bg-origin-padding bg-clip-border
  `,
},

  {
    id: 2,
    title: "Video",
    isNew: false,
    description: "Generate videos with Pica, Runway, Luma and more",
    buttonText: "Open",
    image: "/icons/GalleryIcons/video.svg",
   style: `
    block relative w-[42px] h-[42px]
    rounded-[10px]
    text-white
    shadow-[inset_0_0_0_0.5px_rgba(0,0,0,0.1),_inset_0_1px_1px_0_rgba(255,255,255,0.1),_inset_0_1px_5px_0_rgba(255,255,255,0.1)]
    bg-[oklch(0.7955_0.1875_75.3501)]
  `,
  },
{
  id: 3,
  title: "RealTime",
  isNew: false,
  description: "Real-time AI rendering on a canvas with instant feedback",
  buttonText: "Open",
  image: "/icons/GalleryIcons/RealTime.svg",
  style: `
    block relative w-[42px] h-[42px] 
    rounded-[10px] cursor-pointer
    text-white
    bg-[linear-gradient(0deg,rgb(206,246,255)_0%,oklch(0.7972_0.1583_221.31)_35%,oklch(0.6575_0.1796_237.869)_100%)]
    shadow-[inset_0_0_0_0.5px_oklab(0_0_0/_0.1),inset_0_1px_1px_0_rgba(255,255,255,0.1),inset_0_1px_5px_0_rgba(255,255,255,0.1)]
  `,
},
  {
  id: 4,
  title: "Enhancer",
  isNew: true,
  description: "Upscale and enhance images/videos up to 22k",
  buttonText: "Open",
  image: "/icons/GalleryIcons/Enhancer.svg",
  style: `
    block relative w-[42px] h-[42px]
    rounded-[10px]
    bg-[linear-gradient(0deg,rgb(136,136,136)_0%,rgb(0,0,0)_100%)]
    shadow-[inset_0_0_0_0.5px_rgba(0,0,0,0.1),inset_0_1px_1px_0_rgba(255,255,255,0.1),inset_0_1px_5px_0_rgba(255,255,255,0.1)]
    cursor-pointer
  `,
},
  {
  id: 5,
  title: "Edit",
  isNew: true,
  description: "Add objects, change style, or expand photos/generators",
  buttonText: "Open",
  image: "/icons/GalleryIcons/Edit.svg",
  style: `
    block relative shrink-0 aspect-square w-[42px] h-[42px]
    rounded-[10px]
    bg-[linear-gradient(0deg,rgb(206,180,255)_0%,rgb(105,0,153)_100%)]
    shadow-[inset_0_0_0_0.5px_rgba(0,0,0,0.1),inset_0_1px_1px_0_rgba(255,255,255,0.1),inset_0_1px_5px_0_rgba(255,255,255,0.1)]
    cursor-pointer
  `,
},

  {
  id: 6,
  title: "Video Lipsync",
  isNew: true,
  description: "Lip sync any video to any audio",
  buttonText: "Open",
  image: "/icons/GalleryIcons/Video LipSync.svg",
  style: `
    relative block aspect-square w-[42px] h-[42px] rounded-[10px]
    bg-[linear-gradient(0deg,rgb(206,246,255)_0%,rgb(41,73,98)_100%)]
    shadow-[inset_0_0_0_0.5px_rgba(0,0,0,0.1),inset_0_1px_1px_0_rgba(255,255,255,0.1),inset_0_1px_5px_0_rgba(255,255,255,0.1)]
    cursor-pointer
  `,
},

{
  id: 7,
  title: "Motion Transfer",
  isNew: true,
  description: "Transfer motion to images and animate characters",
  buttonText: "Open",
  image: "/icons/GalleryIcons/MotionTransfer.svg",
  style: `
    relative block aspect-square w-[42px] h-[42px] rounded-[10px]
    bg-black
    shadow-[inset_0_0_0_0.5px_rgba(0,0,0,0.1),inset_0_1px_1px_0_rgba(255,255,255,0.1),inset_0_1px_5px_0_rgba(255,255,255,0.1)]
    cursor-pointer
  `,
},

{
  id: 8,
  title: "Train",
  isNew: false,
  description: "Teach Krea to replicate your style, products, and characters",
  buttonText: "Open",
  image: "/icons/GalleryIcons/Train.svg",
  style: `
    block relative w-[42px] h-[42px]
    rounded-[10px]
    bg-[linear-gradient(135deg,rgb(64,64,64)_0%,rgb(32,32,32)_100%)]
    shadow-[inset_0_0_0_0.5px_rgba(0,0,0,0.1),inset_0_1px_1px_0_rgba(255,255,255,0.1),inset_0_1px_5px_0_rgba(255,255,255,0.1)]
    cursor-pointer
    flex items-center justify-center
  `
}
];

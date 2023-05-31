import { prisma } from "..";

export const productSyncSeed = async () => {
  await Promise.all([
    prisma.product.deleteMany({}),
    prisma.product.create({
      data: {
        name: "Cat litter",
        price: 20.0,
        description:
          "Scoop Away Complete Performance Fresh Scented Clumping Clay Cat Litter",
        stock: 100,
        imageUrl:
          "https://image.chewy.com/is/image/catalog/157668_MAIN._AC_SL1200_V1663968055_.jpg",
        petType: "cat",
        category: "accessory",
      },
    }),
    prisma.product.create({
      data: {
        name: "Tylee human-grade chicken",
        price: 20.0,
        description:
          "Made with human-grade ingredients just like you’d find in your own kitchen—real, whole foods you can see, starting with USDA chicken.",
        stock: 100,
        imageUrl:
          "https://image.chewy.com/is/image/catalog/108396_MAIN._AC_SL1200_V1619649161_.jpg",
        petType: "dog",
        category: "food",
      },
    }),
    prisma.product.create({
      data: {
        name: "Cesar Fresh Chef Chicken Recipe",
        price: 20.0,
        description:
          "Treat your best friend to gourmet flavor with Cesar Fresh Chef Chicken Recipe with Peas & Carrots Dog Food.",
        stock: 100,
        imageUrl:
          "https://image.chewy.com/is/image/catalog/645990_MAIN._AC_SL1200_V1666120491_.jpg",
        petType: "dog",
        category: "food",
      },
    }),
    prisma.product.create({
      data: {
        name: "Pedigree Grilled Steak & Vegetable Kibble",
        price: 27.8,
        description:
          "Give your furry friend a taste of the good life with the Pedigree Complete Nutrition Grilled Steak & Vegetable Flavor Dog Kibble Adult Dry Dog Food.",
        stock: 100,
        imageUrl:
          "https://image.chewy.com/is/image/catalog/362455_MAIN._AC_SS348_V1643222802_.jpg",
        petType: "dog",
        category: "food",
      },
    }),
    prisma.product.create({
      data: {
        name: "Pedigree Choice Cuts in Gravy Beef & Country Stew",
        price: 16.5,
        description:
          "The Pedigree Choice Cuts In Gravy Beef & Country Stew Canned Soft Wet Dog Food Variety Pack is loaded with tasty morsels of real beef in a delectable gravy sauce for paw-some flavor.",
        stock: 100,
        imageUrl:
          "https://image.chewy.com/is/image/catalog/361347_MAIN._AC_SL600_V1649728906_.jpg",
        petType: "dog",
        category: "food",
      },
    }),
    prisma.product.create({
      data: {
        name: `Friskies Surfin' & Turfin' Favorites Dry Cat Food`,
        price: 14.99,
        description: `Give your kitty a bowl of nutrition from land and sea with Friskies Surfin' & Turfin' Favorites Dry Cat Food.`,
        stock: 100,
        imageUrl:
          "https://image.chewy.com/is/image/catalog/76421_MAIN._AC_SS348_V1663603680_.jpg",
        petType: "cat",
        category: "food",
      },
    }),
  ]);
};

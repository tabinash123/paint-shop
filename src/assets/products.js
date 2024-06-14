// // Interior Wall Paints
// import RoyaleAspira from '../../assets/RoyaleAspira.png';
// import RoyaleHealthShield from '../../assets/RoyaleHealthShield.png';
// import RoyaleLuxuryEmulsion from '../../assets/RoyaleLuxuryEmulsion.png';
// import RoyalePlaySafari from '../../assets/RoyalePlaySafari.png';
// import RoyalePlayMetallics from '../../assets/RoyalePlayMetallics.png';
// import RoyalePlayDune from '../../assets/RoyalePlayDune.png';
// import ApexUltimaUndercoats from '../../assets/ApexUltimaUndercoats.png';
// import RoyaleWallBasecoat from '../../assets/RoyaleWallBasecoat.png';

// // Exterior Wall Paints
// import ApexUltima from '../../assets/ApexUltima.png';
// import AceExteriorEmulsion from '../../assets/AceExteriorEmulsion.png';
// import ApexCreatex from '../../assets/ApexCreatex.png';
// import ApexMetallics from '../../assets/ApexMetallics.png';
// import ApexUltimaUndercoat from '../../assets/ApexUltimaUndercoat.png';

// // Metal & Wood Finishes
// import ApcoliteEnamel from '../../assets/ApcoliteEnamel.png';
// import UtsavEnamel from '../../assets/UtsavEnamel.png';
// import WoodTechMelamyne from '../../assets/WoodTechMelamyne.png';
// import WoodTechTouchwood from '../../assets/WoodTechTouchwood.png';

// // Waterproofing
// import SmartCareDampProof from '../../assets/SmartCareDampProof.png';
// import SmartCareHydroloc from '../../assets/SmartCareHydroloc.png';
// import SmartCareBathroomWaterproofing from '../../assets/SmartCareBathroomWaterproofing.png';
// import SmartCareDampProofUltra from '../../assets/SmartCareDampProofUltra.png';
// import SmartCareCrackSeal from '../../assets/SmartCareCrackSeal.png';


const products = [
    {
        category: "Interior Wall Paint",
        subcategories: [
            {
                subcategory: "Plain Finish",
                products: [
                    { name: "Tractor Emulsion", imageUrl: "https://www.asianpaintsnepal.com/assets/images/products/TractorEmulsion.jpg" },
                    { name: "Premium Emulsion", imageUrl: "https://www.asianpaintsnepal.com/assets/images/products/PremiumEmulsion.jpg" },
                    { name: "Royale Luxury Emulsion", imageUrl: "https://www.asianpaintsnepal.com/assets/images/products/RoyaleLuxuryEmulsion.jpg" },
                    { name: "Royale Aspira", imageUrl: "https://www.asianpaintsnepal.com/assets/images/products/RoyaleAspira.jpg" }
                ]
            },
            {
                subcategory: "Wall Texture",
                products: [
                    { name: "Royale Play", imageUrl: "https://www.asianpaintsnepal.com/assets/images/products/RoyalePlay.jpg" },
                    { name: "Royale Play Safari", imageUrl: "https://www.asianpaintsnepal.com/assets/images/products/RoyalePlaySafari.jpg" },
                    { name: "Royale Play Metallics", imageUrl: "https://www.asianpaintsnepal.com/assets/images/products/RoyalePlayMetallics.jpg" },
                    { name: "Royale Play Dune", imageUrl: "https://www.asianpaintsnepal.com/assets/images/products/RoyalePlayDune.jpg" }
                ]
            },
            {
                subcategory: "Undercoat",
                products: [
                    { name: "Decoprime Wall Primer", imageUrl: "https://www.asianpaintsnepal.com/assets/images/products/DecoprimeWallPrimer.jpg" },
                    { name: "Asian Paints Wall Putty", imageUrl: "https://www.asianpaintsnepal.com/assets/images/products/AsianPaintsWallPutty.jpg" }
                ]
            }
        ]
    },
    {
        category: "Exterior Wall Paints",
        subcategories: [
            {
                subcategory: "Plain Finishes",
                products: [
                    { name: "Apex Weatherproof Emulsion", imageUrl: "https://www.asianpaintsnepal.com/assets/images/products/ApexWeatherproofEmulsion.jpg" },
                    { name: "Apex Ultima", imageUrl: "https://www.asianpaintsnepal.com/assets/images/products/ApexUltima.jpg" },
                    { name: "Apex Ultima Protek", imageUrl: "https://www.asianpaintsnepal.com/assets/images/products/ApexUltimaProtek.jpg" },
                    { name: "Apex Advanced", imageUrl: "https://www.asianpaintsnepal.com/assets/images/products/ApexAdvanced.jpg" }
                ]
            },
            {
                subcategory: "Wall Textures",
                products: [
                    { name: "Apex Duracast", imageUrl: "https://www.asianpaintsnepal.com/assets/images/products/ApexDuracast.jpg" },
                    { name: "Apex Tuff", imageUrl: "https://www.asianpaintsnepal.com/assets/images/products/ApexTuff.jpg" }
                ]
            },
            {
                subcategory: "Undercoats",
                products: [
                    { name: "Apex Ultima Primer", imageUrl: "https://www.asianpaintsnepal.com/assets/images/products/ApexUltimaPrimer.jpg" },
                    { name: "SmartCare Damp Proof", imageUrl: "https://www.asianpaintsnepal.com/assets/images/products/SmartCareDampProof.jpg" }
                ]
            }
        ]
    },
    {
        category: "Metal & Wood Finishes",
        subcategories: [
            {
                subcategory: "Metal Enamels",
                products: [
                    { name: "Apcolite Enamel", imageUrl: "https://www.asianpaintsnepal.com/assets/images/products/ApcoliteEnamel.jpg" },
                    { name: "Apcolite Premium Enamel", imageUrl: "https://www.asianpaintsnepal.com/assets/images/products/ApcolitePremiumEnamel.jpg" }
                ]
            },
            {
                subcategory: "Wood Finish",
                products: [
                    { name: "PU Wood Finish", imageUrl: "https://www.asianpaintsnepal.com/assets/images/products/PUWoodFinish.jpg" },
                    { name: "Melamyne Wood Finish", imageUrl: "https://www.asianpaintsnepal.com/assets/images/products/MelamyneWoodFinish.jpg" }
                ]
            }
        ]
    },
    {
        category: "Waterproofing",
        subcategories: [
            {
                subcategory: "All Products",
                products: [
                    { name: "SmartCare Damp Proof", imageUrl: "https://www.asianpaintsnepal.com/assets/images/products/SmartCareDampProof.jpg" },
                    { name: "SmartCare Damp Block", imageUrl: "https://www.asianpaintsnepal.com/assets/images/products/SmartCareDampBlock.jpg" }
                ]
            },
            {
                subcategory: "Exterior & Punning Wall",
                products: [
                    { name: "SmartCare Damp Proof", imageUrl: "https://www.asianpaintsnepal.com/assets/images/products/SmartCareDampProof.jpg" }
                ]
            },
            {
                subcategory: "Bathrooms",
                products: [
                    { name: "SmartCare Bathroom Waterproofing", imageUrl: "https://www.asianpaintsnepal.com/assets/images/products/SmartCareBathroomWaterproofing.jpg" }
                ]
            },
            {
                subcategory: "Interiors",
                products: [
                    { name: "SmartCare Damp Block", imageUrl: "https://www.asianpaintsnepal.com/assets/images/products/SmartCareDampBlock.jpg" }
                ]
            },
            {
                subcategory: "Terrace and Tanks",
                products: [
                    { name: "SmartCare Roofseal", imageUrl: "https://www.asianpaintsnepal.com/assets/images/products/SmartCareRoofseal.jpg" },
                    { name: "SmartCare Tank Waterproofing", imageUrl: "https://www.asianpaintsnepal.com/assets/images/products/SmartCareTankWaterproofing.jpg" }
                ]
            },
            {
                subcategory: "Brick & Stone Walls",
                products: [
                    { name: "SmartCare Crack Seal", imageUrl: "https://www.asianpaintsnepal.com/assets/images/products/SmartCareCrackSeal.jpg" }
                ]
            },
            {
                subcategory: "Cracks and Joints",
                products: [
                    { name: "SmartCare Crack Seal", imageUrl: "https://www.asianpaintsnepal.com/assets/images/products/SmartCareCrackSeal.jpg" }
                ]
            }
        ]
    }
];

export default products;

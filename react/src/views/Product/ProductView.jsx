import React from "react";
import { useLocation } from "react-router-dom";
import StarRating from "../../components/StarRating/StarRating.jsx";
import bgImgRedWine from "./img/bgImgRedWine.png";
import bgImgWhiteWine from "./img/bgImgWhiteWine.png";
import bgImgDefault from "./img/bgImgWhiteWine.png";

export default function ProductView(props) {
    const location = useLocation();

    // Récupère les informations de bottle passées depuis la page précédente
    const bottle = location.state.bottle;
    console.log("bottle:", bottle);

    let imageSrc;
    if (bottle.type === "Vin rouge") {
        imageSrc = bgImgRedWine;
    } else if (bottle.type === "Vin blanc") {
        imageSrc = bgImgWhiteWine;
    } else {
        imageSrc = bgImgDefault;
    }

    return (
        <div className="flex flex-col justify-center items-center pb-32">
            {/* Zone image */}
            <section
                className="w-full flex justify-center items-center pt-6 bg-no-repeat bg-cover bg-blend-overlay bg-black/70"
                style={{
                    backgroundImage: `url(${imageSrc})`,
                }}
            >
                <img
                    className="h-72 object-contain"
                    src={bottle.image_url}
                    alt={bottle.name}
                />
            </section>
            {/* Zone sous image */}
            <section className="w-full flex flex-col justify-start items-start gap-3 p-6 bg-white ">
                <h1 className="font-bold">
                    {bottle.name.charAt(0).toUpperCase() + bottle.name.slice(1)}
                </h1>
                <div className="flex gap-1">
                    {/* Si il n'y a pas la valeur dans l'objet, on n'affiche pas l'information 
                    Commentaire valable pour toutes les informations de cette DIV */}
                    {bottle.type_name ? (
                        <p className="font-light">{bottle.type_name}</p>
                    ) : null}
                    {bottle.format_name ? (
                        <p className="font-light">| {bottle.format_name}</p>
                    ) : null}
                </div>
                <div className="flex gap-1">
                    <p className="font-light">{bottle.country_name}</p>
                    {/* Si il n'y a pas la valeur dans l'objet, on n'affiche pas l'information */}
                    {bottle.region_name ? (
                        <p className="font-light">, {bottle.region_name}</p>
                    ) : null}
                </div>
                <div className="flex gap-1">
                    <StarRating note={bottle.rating_saq} />
                    {/* Si il n'y a pas la valeur dans l'objet, on n'affiche pas l'information */}
                    {bottle.num_comments ? (
                        <p className="font-light">
                            | {bottle.num_comments} avis
                        </p>
                    ) : null}
                </div>
            </section>
            {/* Zone informations détaillées */}
            <section className="w-full border border-t-black-50 bg-white pb-10">
                <h2 className="pt-9 pb-3 px-6 text-2xl bg-red-50">
                    Informations détaillées
                </h2>
                <div className="flex flex-col gap-6 p-6">
                    {/* Si il n'y a pas la valeur dans l'objet, on n'affiche pas l'information 
                    Commentaire valable pour toutes les informations de cette DIV */}
                    {bottle.type_name ? (
                        <div>
                            <p>Couleur</p>
                            <strong>{bottle.type_name}</strong>
                        </div>
                    ) : null}
                    {bottle.cepage_name ? (
                        <div>
                            <p>Cépage</p>
                            <strong>{bottle.cepage_name}</strong>
                        </div>
                    ) : null}
                    {bottle.country_name ? (
                        <div>
                            <p>Pays</p>
                            <strong>{bottle.country_name}</strong>
                        </div>
                    ) : null}
                    {bottle.region_name ? (
                        <div>
                            <p>Région</p>
                            <strong>{bottle.region_name}</strong>
                        </div>
                    ) : null}
                    {bottle.producteur_name ? (
                        <div>
                            <p>Producteur</p>
                            <strong>{bottle.producteur_name.name}</strong>
                        </div>
                    ) : null}
                    {bottle.designation_reglemente ? (
                        <div>
                            <p>Désignation réglementée</p>
                            <strong>
                                {bottle.designation_reglemente.name}
                            </strong>
                        </div>
                    ) : null}
                    {bottle.taux_alcool ? (
                        <div>
                            <p>Degré d'alcool</p>
                            <strong>{bottle.taux_alcool.name}</strong>
                        </div>
                    ) : null}
                    {bottle.taux_sucre ? (
                        <div>
                            <p>Taux de sucre</p>
                            <strong>{bottle.taux_sucre.name}</strong>
                        </div>
                    ) : null}
                    {bottle.format_name ? (
                        <div>
                            <p>Format</p>
                            <strong>{bottle.format_name}</strong>
                        </div>
                    ) : null}
                </div>
            </section>
            {/* Zone dégustation */}
            {/* Si il n'y a pas LES DEUX VALEURS dans l'objet, on n'affiche pas les informations */}
        </div>
    );
}

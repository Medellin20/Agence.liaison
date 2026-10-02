-- Ajoute les catégories demandées sans supprimer ni modifier les biens existants.
-- Les champs nécessaires (surface, pièces, chambres, loyer et jardin) existent
-- déjà dans public.properties.
alter type public.property_type add value if not exists 'apartment_t2';
alter type public.property_type add value if not exists 'apartment_t3';
alter type public.property_type add value if not exists 'house';

notify pgrst, 'reload schema';

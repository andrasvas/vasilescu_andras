---1. feladat

SELECT * FROM `eu_zonak`

---2. feladat

SELECT eu_zonak.zonanev AS 'Régió neve', eu_adatok.datum AS 'Dátum', eu_adatok.szazalekpont AS 'Százalékpont' FROM eu_zonak INNER JOIN eu_zonadatok ON eu_zonak.id = eu_zonadatok.zonakID INNER JOIN eu_adatok ON eu_zonadatok.adatokID = eu_adatok.id WHERE eu_zonak.zonanev = "Észak-Európa";

---3. feladat

SELECT magyar_havi_adatok.datum AS "Dátum", magyar_havi_adatok.import AS "Import(millió euró)", magyar_havi_adatok.export AS "Export(millió euró)", (magyar_havi_adatok.export-magyar_havi_adatok.import) AS "Egyenleg(millió euró)" FROM magyar_havi_adatok;
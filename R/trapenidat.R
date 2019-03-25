pocob <- read_excel("../data/pocet_obyvatel_obce.xlsx", skip=6, col_names = c("okres_kod", "icob", "obec", "pocobyv", "muzi", "zeny", "prum_vek", "prum_vek_muzi", "prum_vek_zeny"))

pocob <- pocob[!is.na(pocob$icob),]

pocvez <- osoby %>%
  filter(stat=="Česká republika") %>%
  group_by(obec, okres) %>%
  summarise(pocet=n()) %>%
  arrange(desc(pocet))

pocmuz <- osoby %>%
  filter(pohlavi=="muž") %>%
  filter(stat=="Česká republika") %>%
  group_by(obec, okres) %>%
  summarise(muzu=n()) %>%
  arrange(desc(muzu))

poczen <- osoby %>%
  filter(pohlavi=="žena") %>%
  filter(stat=="Česká republika") %>%
  group_by(obec, okres) %>%
  summarise(zen=n()) %>%
  arrange(desc(zen))

poctrest <- osoby %>%
  filter(typ=="ve výkonu trestu") %>%
  filter(stat=="Česká republika") %>%
  group_by(obec, okres) %>%
  summarise(trest=n()) %>%
  arrange(desc(trest))

pocvazba <- osoby %>%
  filter(typ=="ve výkonu vazby") %>%
  filter(stat=="Česká republika") %>%
  group_by(obec, okres) %>%
  summarise(vazba=n()) %>%
  arrange(desc(vazba))

pocdete <- osoby %>%
  filter(typ=="ve výkonu detence") %>%
  filter(stat=="Česká republika") %>%
  group_by(obec, okres) %>%
  summarise(dete=n()) %>%
  arrange(desc(dete))

cisokresu <- read_excel("../data/ciselnik_okresu.xls", skip=5, col_names=c("okres_kod", "okres"))

pocob_okresy <- pocob %>%
  left_join(cisokresu)

pocob_okresy[1,10] <- "Hlavní město Praha"

pocvez_okresy <- pocob_okresy %>%
  left_join(pocvez) %>%
  left_join(pocmuz) %>%
  left_join(poczen) %>%
  left_join(poctrest) %>%
  left_join(pocvazba) %>%
  left_join(pocdete)

pocvez_okresy %>%
  select(veznu=pocet, icob, okres, pocobyv, muzi, zeny, muzu, zen, trest, vazba, dete) %>%
  mutate(veznu=replace_na(veznu, 0)) %>%
  mutate(muzu=replace_na(muzu, 0)) %>%
  mutate(zen=replace_na(zen, 0)) %>%
  mutate(trest=replace_na(trest, 0)) %>%
  mutate(dete=replace_na(dete, 0)) %>%
  mutate(vazba=replace_na(vazba, 0)) %>%
  mutate(pct=if_else(pocobyv>0, round(veznu/pocobyv*100,2), 0)) %>%
  write_csv("../data/pocvez_okresy.csv")

pocvez_okresy <- read_csv("../data/pocvez_okresy.csv")

pocvez_okresy %>%
  filter(veznu<1) %>%
  arrange(desc(pocobyv))


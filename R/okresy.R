pocob_okres_csu <- read_excel("../data/pocet_obyvatel_okresy.xlsx", skip=34, col_names = c("okres_kod", "okres", "pocobyv", "muzi", "zeny", "prum_vek", "prum_vek_muzi", "prum_vek_zeny"))

pocob_okres_csu <- pocob_okres_csu[!is.na(pocob_okres_csu$pocobyv),]

pocob_okres_csu <- pocob_okres_csu %>% select(1:3)

pocob_okres_csu <- rbind(pocob_okres_csu, data.frame(okres_kod="CZ0100", okres="Hlavní město Praha", pocobyv=1294513))



okresy  <-  osoby %>%
  filter(stat=="Česká republika") %>%
  group_by(okres) %>%
  summarise(pocet=n()) %>%
  left_join(pocob_okres_csu) %>%
  mutate(pct=pocet/pocobyv*100) %>%
  arrange(desc(pct))

okresy <- okresy[!is.na(okresy$pct),]

write_csv(okresy, "okresy.csv")


pocob %>%
  filter(pocobyv<1000)

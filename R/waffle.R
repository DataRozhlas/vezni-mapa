library(tidyverse)
library(readxl)
library(svglite)
library(waffle)

osoby <- read_excel("../data/veznene_osoby.xlsx", 2)

names(osoby) <- c("id", "pohlavi", "stat", "typ", "obec", "okres", "kraj", "veznice")
osoby$stat <- gsub(" \\(hlavní\\)", "", osoby$stat)

veznice <- osoby %>%
  group_by(veznice) %>%
  summarise(pocet=n()) %>%
  arrange(desc(pocet))
  
osoby %>%
  group_by(pohlavi, veznice) %>%
  summarise(pocet=n()) %>%
  filter(pohlavi=="muž")

# waffle charts pro ženy/muže
vezni <- c(`ženy\n(7.65 %)` = 1657, `muži` = 20017)
svglite("../svg/zeny_00.svg", width = 9, height = 2)
graf <- waffle(
  title="Všechny osoby vězněné v České republice: 21 674 vězňů",
  vezni/10, rows = 20, size = 0.25,
  colors = c("#F15F36", "#19A0AA"),
  xlab = "1 čtvereček = 10 lidí")
print(graf)
dev.off()

c <- 1
for (i in veznice$veznice) {
vezni <- osoby %>%
    filter(veznice==i) %>%
    group_by(pohlavi) %>%
    summarise(pocet=n()) %>%
    arrange(desc(pohlavi))
if (nrow(vezni)<2) {
  if (vezni[1,1]=="muž") {vezni <- rbind(tibble(pohlavi="žena", pocet=0), vezni)} else {vezni <- rbind(vezni, tibble(pohlavi="muž", pocet=0))}
}
vezni <- as.numeric(vezni$pocet)
names(vezni) <- c(paste0("ženy\n(", round(vezni[1]/sum(vezni)*100, 2), "%)"), "muži")
titulek <- paste0("Věznice ", i, ": ", formatC(sum(vezni), big.mark=" "), " vězňů")
soubor <- paste0("../svg/zeny_", formatC(c, width = 2, format = "d", flag = "0"), ".svg")
svglite(file = soubor, width = 9, height = 2)
graf <- waffle(
  vezni,
  title=titulek,
  rows = 20,
  size = 0.25,
  colors = c("#F15F36", "#19A0AA"),
  xlab = "1 čtvereček = 1 člověk")
print(graf)
dev.off()
c <- c + 1
}

# waffle chart pro cizince

osoby %>%
  group_by(stat=="Česká republika") %>%
  summarise(pocet=n()) %>%
  arrange(`stat == "Česká republika"`)

vezni <- c(`cizinci\n(8.28 %)` = 1795, `Češi` = 19879)
svglite("../svg/cizinci_00.svg", width = 9, height = 2)
graf <- waffle(
  title="Všechny osoby vězněné v České republice: 21 674 vězňů",
  vezni/10, rows = 20, size = 0.25,
  colors = c("#99d594", "#fc8d59"),
  xlab = "1 čtvereček = 10 lidí")
print(graf)
dev.off()

c <- 1
for (i in veznice$veznice) {
  vezni <- osoby %>%
    filter(veznice==i) %>%
    group_by(stat=="Česká republika") %>%
    summarise(pocet=n()) %>%
    arrange(`stat == "Česká republika"`)
  if (nrow(vezni)<2) {
    if (vezni[1,1]==FALSE) {vezni <- rbind(tibble(pohlavi=TRUE, pocet=0), vezni)} else {vezni <- rbind(vezni, tibble(pohlavi=FALSE, pocet=0))}
  }
  vezni <- as.numeric(vezni$pocet)
  names(vezni) <- c(paste0("cizinci\n(", round(vezni[1]/sum(vezni)*100, 2), "%)"), "Češi")
  titulek <- paste0("Věznice ", i, ": ", formatC(sum(vezni), big.mark=" "), " vězňů")
  soubor <- paste0("../svg/cizinci_", formatC(c, width = 2, format = "d", flag = "0"), ".svg")
  svglite(file = soubor, width = 9, height = 2)
  graf <- waffle(
    vezni,
    title=titulek,
    rows = 20,
    size = 0.25,
    colors = c("#99d594", "#fc8d59"),
    xlab = "1 čtvereček = 1 člověk")
  print(graf)
  dev.off()
  c <- c + 1
}

# waffle chart podle typu omezení
test <- osoby %>%
  group_by(veznice, typ) %>%
  summarise(pocet=n()) %>%
  arrange(desc(veznice))

vezni <- c(`detence\n(0.4 %)` = 86, `vazba\n(7.16 %)` = 1766, `výkon trestu` = 19822)
svglite("../svg/vazba_00.svg", width = 9, height = 2)
graf <- waffle(
  title="Všechny osoby vězněné v České republice: 21 674 vězňů",
  vezni/10, rows = 20, size = 0.25,
  colors = c("#e41a1c","#377eb8","#4daf4a"),
  xlab = "1 čtvereček = 10 lidí")
print(graf)
dev.off()

vezni_mustr <- tibble(typ=c("ve výkonu detence", "ve výkonu vazby", "ve výkonu trestu"))
c <- 1
for (i in veznice$veznice) {
    vezni <- osoby %>%
    filter(veznice==i) %>%
    group_by(typ) %>%
    summarise(pocet=n()) %>%
    arrange(typ)
  vezni <- left_join(vezni_mustr, vezni)  
  vezni$pocet[is.na(vezni$pocet)] <- 0
  vezni <- as.numeric(vezni$pocet)
  names(vezni) <- c(paste0("detence\n(", round(vezni[1]/sum(vezni)*100, 2), "%)"), paste0("vazba\n(", round(vezni[2]/sum(vezni)*100, 2), "%)"), "výkon trestu")
  titulek <- paste0("Věznice ", i, ": ", formatC(sum(vezni), big.mark=" "), " vězňů")
  soubor <- paste0("../svg/vazba_", formatC(c, width = 2, format = "d", flag = "0"), ".svg")
  svglite(file = soubor, width = 9, height = 2)
  graf <- waffle(
    vezni,
    title=titulek,
    rows = 20,
    size = 0.25,
    colors = c("#e41a1c","#377eb8","#4daf4a"),
    xlab = "1 čtvereček = 1 člověk")
  print(graf)
  dev.off()
  c <- c + 1
}

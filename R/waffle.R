library(tidyverse)
library(readxl)
library(svglite)
library(waffle)

osoby <- read_excel("../data/veznene_osoby.xlsx", 2)

names(osoby) <- c("id", "pohlavi", "stat", "typ", "obec", "okres", "kraj", "veznice")

veznice <- osoby %>%
  group_by(veznice) %>%
  summarise(pocet=n()) %>%
  arrange(desc(pocet))
  
osoby %>%
  group_by(pohlavi, veznice) %>%
  summarise(pocet=n()) %>%
  filter(pohlavi=="muž")


vezni <- c(`ženy\n(7.65 %)` = 1657, `muži` = 20017)
svglite("../svg/zeny_00.svg", width = 9, height = 9)
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
svglite(file = soubor, width = 9, height = 3.57)
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


generujSVG("Praha - Pankrác", 2)

waffle(
  vezni/20, rows = 20, size = 0.5,
  colors = c("#F15F36", "#19A0AA"),
  xlab = "1 čtvereček = 20 osob")

library(tidyverse)
library(readxl)
library(waffle)

osoby <- read_excel("../data/veznene_osoby.xlsx", 2)

names(osoby) <- c("id", "pohlavi", "stat", "typ", "obec", "okres", "kraj", "veznice")

osoby %>%
  group_by(veznice) %>%
  summarise(pocet=n()) %>%
  arrange(desc(pocet)) %>%
  View()

osoby %>%
  group_by(pohlavi, veznice) %>%
  summarise(pocet=n()) %>%
  filter(pohlavi=="muž")


professional <- c(`ženy` = 1657, `muži` = 20017)


svg("waffle.svg")
waffle(
  title="Všechny osoby vězněné v České republice",
  professional/20, rows = 20, size = 0.5,
  colors = c("#F15F36", "#19A0AA"),
  xlab = "1 čtvereček = 20 osob" 
)
dev.off()
generujSVG <- function(veznice, poradi) {
  vezni <- osoby %>%
    filter(veznice==veznice) %>%
    group_by(pohlavi) %>%
    summarise(pocet=n()) %>%
    arrange(desc(pohlavi))
  if (nrow(vezni)<2) {
    if (vezni[1,1]=="muž") {vezni <- rbind(tibble(pohlavi="žena", pocet=0), vezni)} else {vezni <- rbind(vezni, tibble(pohlavi="muž", pocet=0))}
  }
  vezni <- as.numeric(vezni$pocet)
  names(vezni) <- c("ženy", "muži")
  titulek <- paste0("Věznice ", veznice, ": ", sum(vezni), " vězňů")
  soubor <- paste0("../svg/zeny_", formatC(poradi, width = 2, format = "d", flag = "0"), ".svg")
  svglite(file = soubor, width = 9, height = 3.57)
  waffle(
    vezni,
    title=titulek,
    rows = 20,
    size = 0.5,
    colors = c("#F15F36", "#19A0AA"),
    xlab = "1 čtvereček = 1 osoba")
  dev.off()
  
}
public void Scrape()
        {
            var results = new List<GenreChartAddRequest>();

            var webClient = new WebClient();
            var html = webClient.DownloadString("http://www.popvortex.com/music/charts/top-blues-albums.php");

            var parser = new HtmlParser();
            var document = parser.ParseDocument(html);

            var table = document.QuerySelector(".col-md-8");

            var rows = table.QuerySelectorAll(".feed-item");

            var topFive = rows.Take(5);

            foreach (var row in topFive)
            {
                var scraper = new GenreChartAddRequest();

                var position = row.QuerySelectorAll("p").OfType<IHtmlParagraphElement>().ToList();
                var artist = row.QuerySelectorAll("em").OfType<IHtmlElement>().ToList();
                var album = row.QuerySelectorAll("cite").OfType<IHtmlElement>().ToList();

                scraper.Position = position[0].TextContent;
                scraper.Artist = artist[0].TextContent;
                scraper.Album = album[0].TextContent;
                
                results.Add(scraper);
            }

            foreach (var item in results)
            {
                Insert(item);
            }
        }

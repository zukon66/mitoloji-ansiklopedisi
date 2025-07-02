document.addEventListener('DOMContentLoaded', () => {

  const characters = [
    {
      name: "Zeus",
      romanName: "Jupiter",
      title: "Tanrilarin krali",
      image: "images/zeus.png",
      symbols: ["Simsek", "Kartal", "Mese Agaci"],
      details: "Zeus, Olimpos Dagi'nin zirvesinde oturan ve diger tum tanrilari yoneten en guclu tanridir. Gokyuzunun mutlak hakimi olarak, yildirimlarini duzeni saglamak ve dusmanlarini cezalandirmak icin kullanir. Sik sik kilik degistirerek olumlulerin arasina karismasiyla ve sayisiz ask macerasiyla taninir."
    },
    {
      name: "Hera",
      romanName: "Juno",
      title: "Evlilik ve aile tanricasi",
      image: "images/hera.png",
      symbols: ["Tavus Kusu", "Nar", "Asa"],
      details: "Hera, Zeus'un hem kiskanc esi hem de kiz kardesidir. Evliligin ve ailenin kutsalligini korur, ancak kocasinin sadakatsizliklerine karsi son derece kindar ve intikamci olabilir. Genellikle gorkemli ve otoriter bir figur olarak tasvir edilir."
    },
    {
      name: "Poseidon",
      romanName: "Neptun",
      title: "Denizler, depremler ve atlarin tanrisi",
      image: "images/poseidon.png",
      symbols: ["Uclu Mizrak (Trident)", "At", "Yunus"],
      details: "Poseidon, denizlerin ve okyanuslarin mutlak hukumdaridir. Uclu mizragiyla depremler yaratabilir, firtinalar cikarabilir ve yeni adlar olusturabilir. Genellikle huysuz ve ongorulemez bir tanri olarak bilinir."
    },
    {
      name: "Hades",
      romanName: "Pluton",
      title: "Yeralti dunyasinin hukumdari",
      image: "images/hades.png",
      symbols: ["Gorunmezlik Migferi", "Kerberos", "Nergis Cicegi"],
      details: "Hades, yeralti dunyasini yoneten ciddi ve kasvetli tanridir. Olulerin ruhlarinin yargilandigi ve sonsuzluklarini gecirdigi bu diyari buyuk bir titizlikle idare eder. Olimpos'ta pek vakit gecirmez ve genellikle diger tanrilardan uzak durur."
    },
    {
      name: "Athena",
      romanName: "Minerva",
      title: "Bilgelik ve strateji tanricasi",
      image: "images/athnena.png",
      symbols: ["Baykus", "Zeytin Agaci", "Aegis (Kalkan)"],
      details: "Athena, babasi Zeus'un basindan zirhiyla birlikte dogmus, bilgelik, adil savas ve stratejinin tanricasidir. Sehirlerin, ozellikle de adini tasiyan Atina'nin koruyucusudur. Pratik zekasi ve sanat ile zanaata olan destegiyle taninir."
    },
    {
      name: "Apollo",
      romanName: "Apollo",
      title: "Gunes, kehanet ve muzik tanrisi",
      image: "images/apollo.png",
      symbols: ["Lir", "Yay ve Ok", "Defne Agaci"],
      details: "Apollo, sanatin, muzigin, siirin, kehanetin ve sifanin tanrisidir. Delphi'deki unlu kahin merkezinin yoneticisidir. Genellikle parlak, genc ve yakisikli bir tanri olarak tasvir edilir ve altin liriyle taninir."
    },
    {
      name: "Artemis",
      romanName: "Diana",
      title: "Av, doga ve ay tanricasi",
      image: "images/artemis.png",
      symbols: ["Gumus Yay ve Ok", "Ay", "Geyik"],
      details: "Artemis, Apollo'nun ikiz kardesi, avciligin, vahsi doganin ve ayin bakire tanricasidir. Genc kizlarin ve vahsi hayvanlarin koruyucusudur. Bagimsizligina son derece duskundur ve genellikle ormanlarda perileriyle birlikte avlanirken tasvir edilir."
    },
    {
      name: "Ares",
      romanName: "Mars",
      title: "Savas tanrisi",
      image: "images/ares.png",
      symbols: ["Mizrak", "Migfer", "Akbaba"],
      details: "Ares, savasin vahsi, kaotik ve kanli yonunu temsil eder. Strateji ve bilgelikle savasan Athena'nin aksine, Ares saf siddet ve ofkeyle doludur. Diger tanrilar tarafindan pek sevilmez ama savasci Spartalilar tarafindan buyuk saygi gorurdu."
    },
    {
      name: "Aphrodite",
      romanName: "Venus",
      title: "Ask ve guzellik tanricasi",
      image: "images/aphrodite .png",
      symbols: ["Guvercin", "Gul", "Deniz Kabugu"],
      details: "Deniz kopugunden dogan Aphrodite, askin, guzelligin, zevkin ve tutkunun tanricasidir. Guzelligiyle hem tanrilari hem de olumluleri buyuleme gucune sahiptir. Genellikle kibirli ve kaprisli bir tanrica olarak bilinir."
    },
    {
      name: "Hephaestus",
      romanName: "Vulcan",
      title: "Ates ve metal isciligi tanrisi",
      image: "images/hephaestus.png",
      symbols: ["Cekic", "Ors", "Volkan"],
      details: "Hephaestus, tanrilarin demircisi ve zanaatkaridir. Olimpos'taki en cirkin tanri olmasina ragmen, en yeteneklisidir. Tanrilar icin silahlar, zirhlar ve muhtesem esyalar yapar. Genellikle topal olarak tasvir edilir."
    },
    {
      name: "Hermes",
      romanName: "Merkur",
      title: "Tanrilarin habercisi",
      image: "images/hermes.png",
      symbols: ["Kanatli Sandaletler", "Caduceus (Asa)", "Yolcu Sapkasi"],
      details: "Hermes, tanrilarin hizli ve kurnaz habercisidir. Ayni zamanda tuccarlarin, hirsizlarin, gezginlerin ve hatiplerin koruyucusudur. Zekasi ve hiziyla tanrilar ve insanlar arasinda mesajlar tasir, ruhlara yeralti dunyasina rehberlik eder."
    },
    {
      name: "Demeter",
      romanName: "Ceres",
      title: "Tarim ve bereket tanricasi",
      image: "images/demeter.png",
      symbols: ["Bugday Basagi", "Tirpan", "Domuz"],
      details: "Demeter, topragin bereketini, tarimi ve hasadi yoneten tanricadir. Kizi Persephone'nin Hades tarafindan kacirilmasina olan yasi, mevsimlerin (ozellikle kisin) ortaya cikmasina neden olmustur. Insanliga topragi ekmeyi ogreten odur."
    },
    {
      name: "Dionysos",
      romanName: "Bacchus",
      title: "Sarap ve cosku tanrisi",
      image: "images/dionysos.png",
      symbols: ["Asma Yapragi", "Thyrsus (Asa)", "Panter"],
      details: "Dionysos, sarabin, coskunun, tiyatronun ve rituel cilginliginin tanrisidir. Hem nese ve kutlamayi hem de kontrolsuz kaosu temsil eder. Takipcileri (Maenadlar ve Satirler) ile birlikte dogada gezer ve senlikler duzenler."
    },
    {
      name: "Persephone",
      romanName: "Proserpina",
      title: "Ilkbahar tanricasi",
      image: "images/persephone.png",
      symbols: ["Nar", "Nergis", "Mesale"],
      details: "Persephone, Demeter'in kizi ve yeralti dunyasinin kralicesidir. Hades tarafindan kacirildiktan sonra yilin bir kismini yeryuzunde annesiyle (ilkbahar ve yaz), bir kismini ise yeraltinda kocasiyla (sonbahar ve kis) gecirir."
    },
    {
      name: "Eros",
      romanName: "Cupid",
      title: "Ask tanrisi",
      image: "images/eros.png",
      symbols: ["Yay ve Ok", "Kanatlar", "Mesale"],
      details: "Eros, genellikle kanatli, yaramaz bir cocuk olarak tasvir edilen ask ve arzu tanrisidir. Altin uclu oklariyla tanrilari ve insanlari asik edebilir, kursun uclu oklariyla ise nefret asilayabilir."
    },
    {
      name: "Gaia",
      romanName: "Terra",
      title: "Toprak Ana",
      image: "images/gaia.png",
      symbols: ["Toprak", "Meyveler", "Bereket Boynuzu"],
      details: "Gaia, evrenin baslangicindaki ilk varliklardan biri olan Toprak Ana'dir. Gokyuzu (Ouranos), Daglar ve Deniz'i (Pontus) dogurmustur. Tum tanrilarin ve titanlarin atasi, yasamin kendisinin somutlasmis halidir."
    },
    {
      name: "Kronos",
      romanName: "Saturn",
      title: "Zamanin titan krali",
      image: "images/kronos.png",
      symbols: ["Orak", "Tirpan", "Zaman"],
      details: "Kronos, Titanlarin lideri ve zamanin tanrisidir. Babasi Ouranos'u bir orakla devirerek yonetimi ele gecirmis, ancak kendi cocuklari tarafindan devrilecegi kehaneti yuzunden onlari dogar dogmaz yutmustur. Oglu Zeus tarafindan yenilgiye ugratilmistir."
    },
    {
      name: "Rhea",
      romanName: "Ops",
      title: "Dogurganlik tanricasi",
      image: "images/rhea.png",
      symbols: ["Aslan", "Tac", "Davul"],
      details: "Rhea, Titanlarin 'Annesi' olarak bilinen bir dogurganlik tanricasidir. Kronos'un esidir ve Olimpos tanrilarinin (Zeus, Hera, Hades, Poseidon, Demeter, Hestia) annesidir. Oglu Zeus'u babasinin gazabindan kurtarmayi basarmistir."
    },
    {
      name: "Ouranos",
      title: "Gokyuzu ilahi",
      image: "images/Ouranos .png",
      symbols: ["Gokyuzu", "Yildizlar", "Zodyak"],
      details: "Ouranos, Gaia'nin hem oglu hem de esi olan ilkel gokyuzu tanrisidir. Titanlarin, Tepegozlerin (Cyclops) ve Hekatonkheirlerin (Yuz Kollular) babasidir. Cocuklarindan nefret ettigi icin onlari Gaia'nin rahmine geri hapsetmis, bu da oglu Kronos tarafindan devrilmesine yol acmistir."
    },
    {
      name: "Prometheus",
      title: "Insanligin kurtaricisi titan",
      image: "images/Prometheus.png",
      symbols: ["Ates", "Zincir", "Kartal"],
      details: "Prometheus, 'ongorulu' anlamina gelen bir Titan'dir. Insanligi kilden yarattigina ve onlara tanrilardan caldigi atesi (bilgiyi ve medeniyeti) hediye ettigine inanilir. Bu sucu yuzunden Zeus tarafindan bir kayaya zincirlenip karacigerinin her gun bir kartal tarafindan yenmesiyle cezalandirilmistir."
    },
    {
      name: "Epimetheus",
      title: "Dusuncesiz titan",
      image: "images/epimesheus.png",
      symbols: ["Pandora'nin Kutusu", "Dusuncesizlik"],
      details: "Epimetheus, 'sonradan dusunen' anlamina gelen, Prometheus'un dusuncesiz kardesidir. Kardesinin uyarilarina ragmen tanrilarin bir hediyesi olan Pandora'yi es olarak kabul etmis ve Pandora'nin kutusunu acarak dunyaya kotuluklerin yayilmasina neden olmustur."
    },
    {
      name: "Atlas",
      title: "Gogu tasiyan titan",
      image: "images/atlas.png",
      symbols: ["Gokyuzu Kuresi", "Dayaniklilik", "Sutun"],
      details: "Atlas, Titanlarin Olimposlulara karsi savasinda liderlerden biriydi. Savas kaybedilince Zeus tarafindan gokyuzunu omuzlarinda tasimakla cezalandirildi. Bu ceza, evrenin duzenini korumanin bir sembolu haline gelmistir."
    },
    {
      name: "Helios",
      romanName: "Sol",
      title: "Gunes tanrisi",
      image: "images/helios png,.png",
      symbols: ["Gunes Arabasi", "Atlar", "Gunes Taci"],
      details: "Helios, her gun atesten atlarinin cektigi arabasiyla gokyuzunu bir uctan diger uca kat ederek gunesi tasiyan Titan tanrisidir. Her seyi goren ve duyan olarak bilinir. Daha sonraki donemlerde Apollo ile ozdeslestirilmistir."
    },
    {
      name: "Selene",
      romanName: "Luna",
      title: "Ay tanricasi",
      image: "images/selene.png",
      symbols: ["Ay", "Gumus Araba", "Mesale"],
      details: "Selene, Helios'un kiz kardesi ve ayin kisilestirilmis halidir. Geceleri gumus arabasiyla gokyuzunde suzulur. Olumlu coban Endymion'a olan tutkulu askiyla taninir ve onu sonsuz bir uykuya daldirarak her gece ziyaret etmistir."
    },
    {
      name: "Nike",
      romanName: "Victoria",
      title: "Zafer tanricasi",
      image: "images/nike.png",
      symbols: ["Kanatlar", "Zafer Celengi", "Palmiye Dali"],
      details: "Nike, zaferin kanatli tanricasidir. Savas, spor veya herhangi bir rekabette basariyi temsil eder. Genellikle kazanan kisiye bir celenk veya palmiye dali sunarken tasvir edilir. Athena'nin yakin bir yoldasidir."
    },
    {
      name: "Nemesis",
      romanName: "Invidia",
      title: "Intikam tanricasi",
      image: "images/nemesis.png",
      symbols: ["Terazi", "Kilic", "Kirbac"],
      details: "Nemesis, kibre (hubris) kapilan ve ilahi duzene karsi gelen olumluleri cezalandiran tanricadir. Ilahi intikamin ve dengenin kacinilmaz gucunu temsil eder. Kimsenin hak ettiginden fazlasini almadigindan emin olur."
    },
    {
      name: "Tyche",
      romanName: "Fortuna",
      title: "Sans tanricasi",
      image: "images/tyche.png",
      symbols: ["Bereket Boynuzu", "Dumen", "Top"],
      details: "Tyche, sansin, talihin ve kaderin kaprisli tanricasidir. Bir sehrin veya bir bireyin kaderini belirleyebilir. Genellikle gozleri bagli olarak tasvir edilir, bu da sansinin rastgeleligini simgeler."
    },
    {
      name: "Moiralar",
      romanName: "Parcae",
      title: "Kaderin oruculeri",
      image: "images/moiralar.png",
      symbols: ["Iplik", "Makara", "Makas"],
      details: "Moiralar (Kaderler), her tanrinin ve olumlunun hayat ipligini kontrol eden uc kiz kardestir: Klotho (ipligi egiren), Lakhesis (ipligi olcen) ve Atropos (ipligi kesen). Onlarin kararlarina Zeus bile karsi gelemezdi."
    },
    {
      name: "Eris",
      romanName: "Discordia",
      title: "Anlasmazlik tanricasi",
      image: "images/eris.png",
      symbols: ["Altin Elma", "Anlasmazlik", "Kaos"],
      details: "Eris, her turlu kavga, cekisme ve rekabetin tanricasidir. En bilinen eylemi, uzerine 'en guzele' yazili altin elmayi bir dugune atarak Hera, Athena ve Aphrodite arasinda bir guzellik yarismasi baslatmasi ve dolayli olarak Troya Savasi'ni tetiklemesidir."
    },
    {
      name: "Iris",
      romanName: "Arcus",
      title: "Gokkusagi habercisi",
      image: "images/iris.png",
      symbols: ["Gokkusagi", "Surahi", "Kanatlar"],
      details: "Iris, tanrilarin, ozellikle de Hera'nin habercisidir. Gokyuzu ile yeryuzu arasinda bir kopru olan gokkusagini kullanarak mesajlari hizla iletir. Genellikle kanatli ve bir haberci asasi tasiyan genc bir kadin olarak tasvir edilir."
    },
    {
      name: "Perseus",
      title: "Medusa'yi yenen kahraman",
      image: "images/perseus.png",
      symbols: ["Medusa'nin Basi", "Kanatli Sandaletler", "Ayna gibi Kalkan"],
      details: "Perseus, en buyuk Yunan kahramanlarindan biridir. Tanrilarin yardimiyla, baktigi kisiyi tasa ceviren Gorgon Medusa'yi oldurmeyi basarmis, deniz canavari Cetus'u yenerek prenses Andromeda'yi kurtarmis ve Mycenae kralligini kurmustur."
    },
    {
      name: "Herakles",
      romanName: "Herkul",
      title: "On iki gorevin kahramani",
      image: "images/herakles.png",
      symbols: ["Aslan Postu", "Sopa", "Yay ve Ok"],
      details: "Herakles (Romalilarda Herkul), Zeus'un olumlu bir kadindan olan oglu ve Yunan mitolojisinin en unlu kahramanidir. Insanustu bir guce sahiptir ve Hera'nin gazabi sonucu isledigi bir sucun kefareti olarak 'On Iki Gorev' olarak bilinen imkansiz gorevleri tamamlamistir. Basarilari ona olumsuzlugu kazandirmistir."
    },
    {
      name: "Theseus",
      title: "Minotor’un galibi",
      image: "images/theseus.png",
      symbols: ["Labirent", "Minotor", "Iplik Yumagi"],
      details: "Theseus, Atina'nin kurucu krali ve en buyuk kahramanidir. En bilinen basarisi, Girit'teki Labirent'e girip yari insan yari boga canavar Minotor'u oldurmesidir. Bu gorevi, prenses Ariadne'nin verdigi bir iplik yumagi sayesinde basarmistir."
    },
    {
      name: "Jason",
      title: "Argonotlarin lideri",
      image: "images/jason.png",
      symbols: ["Altin Post", "Argo Gemisi", "Ejderha"],
      details: "Jason, amcasi tarafindan gasp edilen tahtini geri almak icin efsanevi Altin Post'u bulmakla gorevlendirilen bir kahramandir. Yunanistan'in en buyuk kahramanlarini (Herakles, Orpheus vb.) toplayarak 'Argo' adli gemiyle yola cikmis ve buyucu Medea'nin yardimiyla bu tehlikeli gorevi basarmistir."
    },
    {
      name: "Odysseus",
      romanName: "Ulysses",
      title: "Kurnaz kral",
      image: "images/oddysseus.png",
      symbols: ["Troya Ati", "Yay", "Zeka"],
      details: "Odysseus, Ithaka'nin kurnaz ve zeki kralidir. Troya Savasi'nin kazanilmasinda kilit rol oynayan Troya Ati fikrinin sahibidir. Savas sonrasi evine donusu on yil surmus ve bu yolculuk sirasinda Tepegozler, Sirenler ve buyucu Kirke gibi bircok tehlikeyle zekasi sayesinde basa cikmistir."
    },
    {
      name: "Achilles",
      romanName: "Achilles",
      title: "Yenilmez savasci",
      image: "images/achilles.png",
      symbols: ["Topuk", "Zirh", "Mizrak"],
      details: "Achilles, Yunanlarin en buyuk ve en guclu savascisiydi. Annesi Thetis onu bebekken olumsuzluk nehri Styx'e batirmis, ancak tuttugu topugu suya degmedigi icin tek zayif noktasi orasi kalmistir. Troya Savasi'nda sayisiz kahraman oldurmus, ancak sonunda Paris tarafindan topugundan vurularak oldurulmustur."
    },
    {
      name: "Hector",
      romanName: "Hector",
      title: "Troya’nin savunucusu",
      image: "images/hector.png",
      symbols: ["Troya Surlari", "Aile", "Onur"],
      details: "Hector, Troya krali Priamos'un en buyuk oglu ve Troyalilarin en cesur savascisiydi. Ailesine ve sehrine derinden bagli, onurlu bir komutandi. Savasin kaderini belirleyen bir dovuste Achilles tarafindan oldurulmustur."
    },
    {
      name: "Paris",
      romanName: "Paris",
      title: "Troya prensi",
      image: "images/paris.png",
      symbols: ["Guzellik Yarismasi", "Yay", "Ask"],
      details: "Paris, Hector'un kucuk kardesi olan Troya prensidir. Uc tanrica arasindaki guzellik yarismasinda hakemlik yapmis ve en guzel kadinla evlenme vaadi karsiliginda Aphrodite'i secmistir. Sparta kralicesi Helen'i kacirmasi, Troya Savasi'nin baslamasina neden olmustur."
    },
    {
      name: "Helen",
      romanName: "Helen",
      title: "Dunyanin en guzel kadini",
      image: "images/helen.png",
      symbols: ["Guzellik", "Savas", "Kacirilma"],
      details: "Helen, Zeus'un kizi ve dunyanin en guzel olumlu kadiniydi. Sparta krali Menelaus ile evliyken, Paris tarafindan kacirilmasi (veya onunla kacmasi) on yil suren Troya Savasi'ni baslatan olay olmustur."
    },
    {
      name: "Oedipus",
      romanName: "Oedipus",
      title: "Trajik Thebai krali",
      image: "images/oedipus.png",
      symbols: ["Kavsak", "Sfenks", "Korluk"],
      details: "Oedipus, hakkinda 'babasini oldurup annesiyle evlenecegi' kehaneti bulunan trajik bir kahramandir. Kaderinden kacmaya calisirken farkinda olmadan bu kehaneti gerceklestirmis ve gercegi ogrendiginde kendi gozlerini kor etmistir."
    },
    {
      name: "Antigone",
      romanName: "Antigone",
      title: "Asi prenses",
      image: "images/antigone.png",
      symbols: ["Vicdan", "Devlet Yasasi", "Mezar"],
      details: "Antigone, Oedipus'un kizidir. Kral olan dayisi Kreon'un, hain ilan edilen erkek kardesinin gomulmesini yasaklayan emrine karsi gelmistir. Tanrilarin yazisiz yasalarinin, insanlarin yasalarindan daha ustun olduguna inanarak kardesini gommus ve bu yuzden olume mahkum edilmistir."
    },
    {
      name: "Medea",
      romanName: "Medea",
      title: "Guclu buyucu",
      image: "images/medea.png",
      symbols: ["Buyu Iksirleri", "Ejderhali Araba", "Intikam"],
      details: "Medea, Gunes tanrisi Helios'un soyundan gelen guclu bir buyucudur. Altin Post'u almasinda Jason'a yardim etmis ve onunla evlenmistir. Ancak Jason onu baska bir kadin icin terk edince, korkunc bir intikam alarak hem rakibini hem de Jason'dan olan kendi cocuklarini oldurmustur."
    },
    {
      name: "Orpheus",
      romanName: "Orpheus",
      title: "Buyuleyici ozan",
      image: "images/Orpheus .png",
      symbols: ["Lir", "Muzik", "Kayip Ask"],
      details: "Orpheus, muzigi ve siiriyle tanrilari, insanlari ve hatta cansiz varliklari bile buyuleyebilen efsanevi bir ozandi. Cok sevdigi karisi Eurydike oldugunde, onu geri getirmek icin yeralti dunyasina inmis, ancak tam cikmak uzereyken arkasina bakma yasagini cignedigi icin onu sonsuza dek kaybetmistir."
    },
    {
      name: "Eurydike",
      romanName: "Eurydice",
      title: "Trajik nymphe",
      image: "images/eurydike.png",
      symbols: ["Yilan Isirigi", "Yeralti Dunyasi", "Geriye Bakis"],
      details: "Eurydike, bir orman perisi (nymphe) ve Orpheus'un karisiydi. Dugun gununde bir yilan tarafindan isirilarak olmuslerdir. Kocasi onu kurtarmak icin yeraltina inse de, Orpheus'un tek bir anlik sabirsizligi yuzunden yeryuzune donememistir."
    },
    {
      name: "Sisyphos",
      romanName: "Sisyphus",
      title: "Cezali kral",
      image: "images/sisphos.png",
      symbols: ["Kaya", "Tepe", "Sonsuz Caba"],
      details: "Sisyphos, tanrilari kandiracak kadar kurnaz bir kraldi. Olumu bile alt etmeye calisinca, Zeus tarafindan yeralti dunyasinda sonsuza dek buyuk bir kayayi bir tepenin zirvesine itmekle cezalandirildi. Ancak kaya zirveye her ulastiginda tekrar asagi yuvarlaniyordu, bu da onun cabasini anlamsiz ve sonsuz kiliyordu."
    },
    {
      name: "Tantalos",
      romanName: "Tantalus",
      title: "Kibirli kral",
      image: "images/tantalos.png",
      symbols: ["Ulasilamayan Su", "Ulasilamayan Meyve", "Ebedi Azap"],
      details: "Tantalos, tanrilarin sirlarini calan ve onlara kendi oglunu yemek olarak sunan kibirli bir kraldi. Cezasi, yeraltinda cenesine kadar gelen bir suyun icinde durup, tam icecekken suyun cekilmesi ve basinin uzerindeki meyve dallarinin tam uzanacakken yukselmesiydi. Sonsuz bir aclik ve susuzluga mahkum edildi."
    },
    {
      name: "Icarus",
      romanName: "Icarus",
      title: "Dusen genc",
      image: "images/icarus.png",
      symbols: ["Balmumu Kanatlar", "Gunes", "Kibir"],
      details: "Icarus, babasi dahi mimar Daedalus'un yaptigi balmumu ve tuyden kanatlari kullanarak Girit'ten kacmaya calisan gencti. Babasinin ne cok alcaktan ne de cok yuksekten ucmasi yonundeki uyarisini dinlemeyip kibrine yenik duserek gunese cok yaklasti. Balmumu eriyince kanatlari dagildi ve denize duserek oldu."
    },
    {
      name: "Daedalus",
      romanName: "Daedalus",
      title: "Dahiyane mimar",
      image: "images/daedalus.png",
      symbols: ["Labirent", "Kanatlar", "Mucitlik"],
      details: "Daedalus, Atinali dahi bir zanaatkar, sanatci ve mucitti. Girit krali Minos icin Minotor'u hapsetmek uzere unlu Labirent'i insa etmistir. Kral onu ve oglu Icarus'u adada esir tutunca, kacmak icin tuylerden ve balmumundan kanatlar yapmistir."
    },
    {
      name: "Pandora",
      romanName: "Pandora",
      title: "Ilk kadin",
      image: "images/pandora.png",
      symbols: ["Kutu (Aslinda Kavanoz)", "Umut", "Merak"],
      details: "Pandora, Prometheus'un atesi calmasina karsilik insanliga bir ceza olarak tanrilar tarafindan yaratilan ilk kadindi. Ona tanrilar tarafindan asla acmamasi soylenen bir kutu (aslinda bir kavanoz) verildi. Merakina yenik dusup kutuyu acinca, icindeki tum kotulukler (hastalik, aci, keder) dunyaya yayildi. Kutuda kalan tek sey ise 'Umut' oldu."
    },
    {
      name: "Chiron",
      romanName: "Chiron",
      title: "Bilge kentaur",
      image: "images/chiron.png",
      symbols: ["Bilgelik", "Ogretmenlik", "Sifa"],
      details: "Chiron, diger kentaur (yari insan, yari at varliklar) gibi vahsi ve barbar degil, aksine bilge, nazik ve yetenekli bir ogretmendi. Tip, muzik ve avcilikta ustaydi ve Achilles, Herakles, Jason gibi bircok buyuk kahramana hocalik yapmistir."
    }
  ];

  const gallery = document.getElementById('character-gallery');
  const modal = document.getElementById('character-modal');
  const modalImg = document.getElementById('modal-img');
  const modalName = document.getElementById('modal-name');
  const modalSymbols = document.getElementById('modal-symbols');
  const modalDetails = document.getElementById('modal-details');
  const closeModalBtn = document.querySelector('.modal-close');
  const searchInput = document.getElementById('search-input');
  const backToTopButton = document.getElementById('back-to-top');
  const toggleFamilyTreeButton = document.getElementById('toggle-family-tree');
  const familyTreeSection = document.getElementById('family-tree-section');
  const familyTreeContainer = document.getElementById('family-tree-container');
  const selectedCharacterInfo = document.getElementById('selected-character-info');
  const characterPosition = document.getElementById('character-position');

  // Family Tree Data (Parsed from user input)
  const familyTreeRawData = `
Zeus: Anne Rhea, Baba Kronos 
Hera: Anne Rhea, Baba Kronos 
Poseidon: Anne Rhea, Baba Kronos 
Hades: Anne Rhea, Baba Kronos 
Athena: Anne Metis, Baba Zeus 
Apollo: Anne Leto, Baba Zeus 
Artemis: Anne Leto, Baba Zeus 
Ares: Anne Hera, Baba Zeus 
Aphrodite: Anne Dione, Baba Zeus 
Hephaestus: Anne Hera, Baba Zeus 
Hermes: Anne Maia, Baba Zeus 
Demeter: Anne Rhea, Baba Kronos 
Dionysos: Anne Semele, Baba Zeus 
Persephone: Anne Demeter, Baba Zeus 
Eros: Anne Aphrodite, Baba Ares 
Gaia: Anne –, Baba – 
Kronos: Anne Gaia, Baba Ouranos 
Rhea: Anne Gaia, Baba Ouranos 
Ouranos: Anne –, Baba – 
Prometheus: Anne Clymene, Baba Iapetos 
Epimetheus: Anne Clymene, Baba Iapetos 
Atlas: Anne Clymene, Baba Iapetos 
Helios: Anne Theia, Baba Hyperion 
Selene: Anne Theia, Baba Hyperion 
Nike: Anne Styx, Baba Pallas 
Nemesis: Anne Nyx, Baba – 
Tyche: Anne Tethys, Baba Okeanos 
Moiralar: Anne Themis, Baba Zeus 
Eris: Anne Nyx, Baba – 
Iris: Anne Elektra, Baba Thaumas 
Perseus: Anne Danae, Baba Zeus 
Herakles: Anne Alkmene, Baba Zeus 
Theseus: Anne Aithra, Baba Aegeus 
Jason: Anne Polymede, Baba Aison 
Odysseus: Anne Antikleia, Baba Laertes 
Achilles: Anne Thetis, Baba Peleus 
Hector: Anne Hekabe, Baba Priamos 
Paris: Anne Hekabe, Baba Priamos 
Helen: Anne Leda, Baba Zeus 
Oedipus: Anne Iokaste, Baba Laios 
Antigone: Anne Iokaste, Baba Oedipus 
Medea: Anne Idyia, Baba Aietes 
Orpheus: Anne Kalliope, Baba Oeagros 
Eurydike: Anne –, Baba – 
Sisyphos: Anne Enarete, Baba Aeolus 
Tantalos: Anne Plouto, Baba Zeus 
Icarus: Anne –, Baba Daidalos 
Daedalus: Anne –, Baba Eupalamus 
Pandora: Anne –, Baba – 
Chiron: Anne Philyra, Baba Kronos
  `;

  const familyData = {}; // { name: { parents: [], children: [], siblings: [] } }

  // Parse the raw family tree data
  familyTreeRawData.trim().split('\n').forEach(line => {
    const parts = line.split(':');
    if (parts.length === 2) {
      const name = parts[0].trim();
      const parentString = parts[1].trim();
      const parents = [];

      const anneMatch = parentString.match(/Anne ([^,]+)/);
      if (anneMatch && anneMatch[1].trim() !== '–') {
        parents.push(anneMatch[1].trim());
      }

      const babaMatch = parentString.match(/Baba ([^,]+)/);
      if (babaMatch && babaMatch[1].trim() !== '–') {
        parents.push(babaMatch[1].trim());
      }

      if (!familyData[name]) {
        familyData[name] = { parents: [], children: [], siblings: [] };
      }
      familyData[name].parents = parents;

      parents.forEach(parent => {
        if (!familyData[parent]) {
          familyData[parent] = { parents: [], children: [], siblings: [] };
        }
        if (!familyData[parent].children.includes(name)) {
          familyData[parent].children.push(name);
        }
      });
    }
  });

  // Populate siblings after all parents and children are known
  Object.keys(familyData).forEach(characterName => {
    const parentsOfCharacter = familyData[characterName].parents;
    if (parentsOfCharacter.length > 0) {
      parentsOfCharacter.forEach(parent => {
        if (familyData[parent] && familyData[parent].children) {
          familyData[parent].children.forEach(sibling => {
            if (sibling !== characterName && !familyData[characterName].siblings.includes(sibling)) {
              familyData[characterName].siblings.push(sibling);
            }
          });
        }
      });
    }
  });


  // Sayfa kaydirildiginda yukari cik butonunu goster/gizle
  window.onscroll = function() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      backToTopButton.style.display = "block";
    } else {
      backToTopButton.style.display = "none";
    }
  };

  // Yukari cik butonuna tiklandiginda sayfanin en ustune kaydir
  backToTopButton.addEventListener('click', () => {
    document.body.scrollTop = 0; // Safari icin
    document.documentElement.scrollTop = 0; // Chrome, Firefox, IE ve Opera icin
  });

  // Karakter kartlarini olustur ve goster
  function displayCharacters(chars) {
    gallery.innerHTML = ''; // Mevcut kartlari temizle
    chars.forEach(character => {
      const card = document.createElement('div');
      card.className = 'character-card';
      
      card.innerHTML = `
        <img src="${character.image}" alt="${character.name}" onerror="this.onerror=null; this.src='https://via.placeholder.com/250x220.png?text=Gorsel+Yuklenemedi';" onload="this.classList.add('loaded');">
        <h2>${character.name}</h2>
        <p class="title">${character.title}</p>
      `;

      card.addEventListener('click', () => {
        openModal(character);
      });

      gallery.appendChild(card);
    });
  }

  // Arama islevi
  searchInput.addEventListener('keyup', (event) => {
    const searchTerm = event.target.value.toLowerCase();
    const filteredCharacters = characters.filter(character => {
      return character.name.toLowerCase().includes(searchTerm) ||
          character.title.toLowerCase().includes(searchTerm) ||
          character.details.toLowerCase().includes(searchTerm) ||
          (character.romanName && character.romanName.toLowerCase().includes(searchTerm)) ||
          (character.symbols && character.symbols.some(symbol => symbol.toLowerCase().includes(searchTerm)));
    });
    displayCharacters(filteredCharacters);
  });

  // Sayfa yuklendiginde tum karakterleri goster
  displayCharacters(characters);

  // Modal'i acan fonksiyon
  function openModal(character) {
    modalImg.src = character.image;
    modalName.textContent = character.name;
    if (character.romanName) {
      modalName.textContent += ` (${character.romanName})`;
    }
    modalDetails.textContent = character.details;

    modalSymbols.innerHTML = '';
    if (character.symbols && character.symbols.length > 0) {
      character.symbols.forEach(symbolText => {
        const li = document.createElement('li');
        li.textContent = symbolText;
        modalSymbols.appendChild(li);
      });
    }

    modal.style.display = 'flex';
  }

  // Modal'i kapatan fonksiyon
  function closeModal() {
    modal.style.display = 'none';
  }

  // Kapatma olaylari
  closeModalBtn.addEventListener('click', closeModal);
  modal.addEventListener('click', (event) => {
    // Sadece modal'in arka planina tiklanirsa kapat
    if (event.target === modal) {
      closeModal();
    }
  });

  // Soy agaci bolumunu goster/gizle
  toggleFamilyTreeButton.addEventListener('click', () => {
    if (familyTreeSection.classList.contains('hidden-section')) {
      familyTreeSection.classList.remove('hidden-section');
      gallery.style.display = 'none'; // Karakter galerisini gizle
      toggleFamilyTreeButton.textContent = 'Karakterleri Goster';
      displayAllCharactersForFamilyTree(); // Tum karakterleri listele
    } else {
      familyTreeSection.classList.add('hidden-section');
      gallery.style.display = 'grid'; // Karakter galerisini goster
      toggleFamilyTreeButton.textContent = 'Soy Agacini Goster';
      familyTreeContainer.innerHTML = ''; // Soy agacini temizle
      selectedCharacterInfo.style.display = 'none'; // Secilen karakter bilgisini gizle
    }
  });

  function displayAllCharactersForFamilyTree() {
    familyTreeContainer.innerHTML = '';
    selectedCharacterInfo.style.display = 'none';

    const characterNames = Object.keys(familyData).sort(); // Alfabetik sirala

    const listContainer = document.createElement('div');
    listContainer.className = 'family-list';

    characterNames.forEach(name => {
      const node = createNode(name);
      listContainer.appendChild(node);
    });
    familyTreeContainer.appendChild(listContainer);
  }

  function createNode(name) {
    const node = document.createElement('div');
    node.className = 'family-node';
    node.textContent = name;
    node.dataset.characterName = name;
    node.addEventListener('click', () => displayCharacterPosition(name));
    return node;
  }

  function displayCharacterPosition(characterName) {
    familyTreeContainer.innerHTML = ''; // Clear previous content
    selectedCharacterInfo.style.display = 'block';

    const charData = familyData[characterName];

    // Display selected character
    const selectedCharNode = createNode(characterName);
    selectedCharNode.style.backgroundColor = '#a8d4c8'; // Highlight selected character
    familyTreeContainer.appendChild(selectedCharNode);

    let positionText = `Karakter: ${characterName}\n`;

    // Display Parents
    if (charData.parents.length > 0) {
      const parentsGroup = document.createElement('div');
      parentsGroup.className = 'family-details-group';
      const parentsTitle = document.createElement('h4');
      parentsTitle.textContent = 'Ebeveynler:';
      parentsGroup.appendChild(parentsTitle);
      charData.parents.forEach(parent => {
        parentsGroup.appendChild(createNode(parent));
      });
      familyTreeContainer.appendChild(parentsGroup);
      positionText += `Ebeveynler: ${charData.parents.join(', ')}\n`;
    } else {
      positionText += `Ebeveynler: Bilinmiyor veya yok\n`;
    }

    // Display Children
    if (charData.children.length > 0) {
      const childrenGroup = document.createElement('div');
      childrenGroup.className = 'family-details-group';
      const childrenTitle = document.createElement('h4');
      childrenTitle.textContent = 'Cocuklar:';
      childrenGroup.appendChild(childrenTitle);
      charData.children.forEach(child => {
        childrenGroup.appendChild(createNode(child));
      });
      familyTreeContainer.appendChild(childrenGroup);
      positionText += `Cocuklar: ${charData.children.join(', ')}\n`;
    } else {
      positionText += `Cocuklar: Yok\n`;
    }

    // Display Siblings
    if (charData.siblings.length > 0) {
      const siblingsGroup = document.createElement('div');
      siblingsGroup.className = 'family-details-group';
      const siblingsTitle = document.createElement('h4');
      siblingsTitle.textContent = 'Kardesler:';
      siblingsGroup.appendChild(siblingsTitle);
      charData.siblings.forEach(sibling => {
        siblingsGroup.appendChild(createNode(sibling));
      });
      familyTreeContainer.appendChild(siblingsGroup);
      positionText += `Kardesler: ${charData.siblings.join(', ')}\n`;
    } else {
      positionText += `Kardesler: Yok\n`;
    }

    characterPosition.textContent = positionText;
  }

});
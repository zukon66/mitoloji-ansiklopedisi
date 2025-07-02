document.addEventListener('DOMContentLoaded', () => {

    const characters = [
        {
            name: "Zeus",
            romanName: "Jüpiter",
            title: "Tanrıların kralı",
            image: "images/zeus png.png",
            symbols: ["Şimşek", "Kartal", "Meşe Ağacı"],
            details: "Zeus, Olimpos Dağı'nın zirvesinde oturan ve diğer tüm tanrıları yöneten en güçlü tanrıdır. Gökyüzünün mutlak hakimi olarak, yıldırımlarını düzeni sağlamak ve düşmanlarını cezalandırmak için kullanır. Sık sık kılık değiştirerek ölümlülerin arasına karışmasıyla ve sayısız aşk macerasıyla tanınır."
        },
        {
            name: "Hera",
            romanName: "Juno",
            title: "Evlilik ve aile tanrıçası",
            image: "images/hera png.png",
            symbols: ["Tavus Kuşu", "Nar", "Asa"],
            details: "Hera, Zeus'un hem kıskanç eşi hem de kız kardeşidir. Evliliğin ve ailenin kutsallığını korur, ancak kocasının sadakatsizliklerine karşı son derece kindar ve intikamcı olabilir. Genellikle görkemli ve otoriter bir figür olarak tasvir edilir."
        },
        {
            name: "Poseidon",
            romanName: "Neptün",
            title: "Denizler, depremler ve atların tanrısı",
            image: "images/poseidon png.png",
            symbols: ["Üçlü Mızrak (Trident)", "At", "Yunus"],
            details: "Poseidon, denizlerin ve okyanusların mutlak hükümdarıdır. Üçlü mızrağıyla depremler yaratabilir, fırtınalar çıkarabilir ve yeni adlar oluşturabilir. Genellikle huysuz ve öngörülemez bir tanrı olarak bilinir."
        },
        {
            name: "Hades",
            romanName: "Plüton",
            title: "Yeraltı dünyasının hükümdarı",
            image: "images/hades png.png",
            symbols: ["Görünmezlik Miğferi", "Kerberos", "Nergis Çiçeği"],
            details: "Hades, yeraltı dünyasını yöneten ciddi ve kasvetli tanrıdır. Ölülerin ruhlarının yargılandığı ve sonsuzluklarını geçirdiği bu diyarı büyük bir titizlikle idare eder. Olimpos'ta pek vakit geçirmez ve genellikle diğer tanrılardan uzak durur."
        },
        {
            name: "Athena",
            romanName: "Minerva",
            title: "Bilgelik ve strateji tanrıçası",
            image: "images/athnena png.png",
            symbols: ["Baykuş", "Zeytin Ağacı", "Aegis (Kalkan)"],
            details: "Athena, babası Zeus'un başından zırhıyla birlikte doğmuş, bilgelik, adil savaş ve stratejinin tanrıçasıdır. Şehirlerin, özellikle de adını taşıyan Atina'nın koruyucusudur. Pratik zekası ve sanat ile zanaata olan desteğiyle tanınır."
        },
        {
            name: "Apollo",
            romanName: "Apollo",
            title: "Güneş, kehanet ve müzik tanrısı",
            image: "images/apollo png.png",
            symbols: ["Lir", "Yay ve Ok", "Defne Ağacı"],
            details: "Apollo, sanatın, müziğin, şiirin, kehanetin ve şifanın tanrısıdır. Delphi'deki ünlü kahin merkezinin yöneticisidir. Genellikle parlak, genç ve yakışıklı bir tanrı olarak tasvir edilir ve altın liriyle tanınır."
        },
        {
            name: "Artemis",
            romanName: "Diana",
            title: "Av, doğa ve ay tanrıçası",
            image: "images/artemis png.png",
            symbols: ["Gümüş Yay ve Ok", "Ay", "Geyik"],
            details: "Artemis, Apollo'nun ikiz kardeşi, avcılığın, vahşi doğanın ve ayın bakire tanrıçasıdır. Genç kızların ve vahşi hayvanların koruyucusudur. Bağımsızlığına son derece düşkündür ve genellikle ormanlarda perileriyle birlikte avlanırken tasvir edilir."
        },
        {
            name: "Ares",
            romanName: "Mars",
            title: "Savaş tanrısı",
            image: "images/ares png.png",
            symbols: ["Mızrak", "Miğfer", "Akbaba"],
            details: "Ares, savaşın vahşi, kaotik ve kanlı yönünü temsil eder. Strateji ve bilgelikle savaşan Athena'nın aksine, Ares saf şiddet ve öfkeyle doludur. Diğer tanrılar tarafından pek sevilmez ama savaşçı Spartalılar tarafından büyük saygı görürdü."
        },
        {
            name: "Aphrodite",
            romanName: "Venüs",
            title: "Aşk ve güzellik tanrıçası",
            image: "images/aphrodıte  png.png",
            symbols: ["Güvercin", "Gül", "Deniz Kabuğu"],
            details: "Deniz köpüğünden doğan Aphrodite, aşkın, güzelliğin, zevkin ve tutkunun tanrıçasıdır. Güzelliğiyle hem tanrıları hem de ölümlüleri büyüleme gücüne sahiptir. Genellikle kibirli ve kaprisli bir tanrıça olarak bilinir."
        },
        {
            name: "Hephaestus",
            romanName: "Vulcan",
            title: "Ateş ve metal işçiliği tanrısı",
            image: "images/hephaestus png.png",
            symbols: ["Çekiç", "Örs", "Volkan"],
            details: "Hephaestus, tanrıların demircisi ve zanaatkarıdır. Olimpos'taki en çirkin tanrı olmasına rağmen, en yeteneklisidir. Tanrılar için silahlar, zırhlar ve muhteşem eşyalar yapar. Genellikle topal olarak tasvir edilir."
        },
        {
            name: "Hermes",
            romanName: "Merkür",
            title: "Tanrıların habercisi",
            image: "images/hermes png.png",
            symbols: ["Kanatlı Sandaletler", "Caduceus (Asa)", "Yolcu Şapkası"],
            details: "Hermes, tanrıların hızlı ve kurnaz habercisidir. Aynı zamanda tüccarların, hırsızların, gezginlerin ve hatiplerin koruyucusudur. Zekası ve hızıyla tanrılar ve insanlar arasında mesajlar taşır, ruhlara yeraltı dünyasına rehberlik eder."
        },
        {
            name: "Demeter",
            romanName: "Ceres",
            title: "Tarım ve bereket tanrıçası",
            image: "images/demeter png.png",
            symbols: ["Buğday Başağı", "Tırpan", "Domuz"],
            details: "Demeter, toprağın bereketini, tarımı ve hasadı yöneten tanrıçadır. Kızı Persephone'nin Hades tarafından kaçırılmasına olan yası, mevsimlerin (özellikle kışın) ortaya çıkmasına neden olmuştur. İnsanlığa toprağı ekmeyi öğreten odur."
        },
        {
            name: "Dionysos",
            romanName: "Bacchus",
            title: "Şarap ve coşku tanrısı",
            image: "images/dıonysos.png",
            symbols: ["Asma Yaprağı", "Thyrsus (Asa)", "Panter"],
            details: "Dionysos, şarabın, coşkunun, tiyatronun ve ritüel çılgınlığının tanrısıdır. Hem neşe ve kutlamayı hem de kontrolsüz kaosu temsil eder. Takipçileri (Maenadlar ve Satirler) ile birlikte doğada gezer ve şenlikler düzenler."
        },
        {
            name: "Persephone",
            romanName: "Proserpina",
            title: "İlkbahar tanrıçası",
            image: "images/persephone.png",
            symbols: ["Nar", "Nergis", "Meşale"],
            details: "Persephone, Demeter'in kızı ve yeraltı dünyasının kraliçesidir. Hades tarafından kaçırıldıktan sonra yılın bir kısmını yeryüzünde annesiyle (ilkbahar ve yaz), bir kısmını ise yeraltında kocasıyla (sonbahar ve kış) geçirir."
        },
        {
            name: "Eros",
            romanName: "Cupid",
            title: "Aşk tanrısı",
            image: "images/eros png.png",
            symbols: ["Yay ve Ok", "Kanatlar", "Meşale"],
            details: "Eros, genellikle kanatlı, yaramaz bir çocuk olarak tasvir edilen aşk ve arzu tanrısıdır. Altın uçlu oklarıyla tanrıları ve insanları aşık edebilir, kurşun uçlu oklarıyla ise nefret aşılayabilir."
        },
        {
            name: "Gaia",
            romanName: "Terra",
            title: "Toprak Ana",
            image: "images/gaıa png.png",
            symbols: ["Toprak", "Meyveler", "Bereket Boynuzu"],
            details: "Gaia, evrenin başlangıcındaki ilk varlıklardan biri olan Toprak Ana'dır. Gökyüzü (Ouranos), Dağlar ve Deniz'i (Pontus) doğurmuştur. Tüm tanrıların ve titanların atası, yaşamın kendisinin somutlaşmış halidir."
        },
        {
            name: "Kronos",
            romanName: "Satürn",
            title: "Zamanın titan kralı",
            image: "images/kronos png.png",
            symbols: ["Orak", "Tırpan", "Zaman"],
            details: "Kronos, Titanların lideri ve zamanın tanrısıdır. Babası Ouranos'u bir orakla devirerek yönetimi ele geçirmiş, ancak kendi çocukları tarafından devrileceği kehaneti yüzünden onları doğar doğmaz yutmuştur. Oğlu Zeus tarafından yenilgiye uğratılmıştır."
        },
        {
            name: "Rhea",
            romanName: "Ops",
            title: "Doğurganlık tanrıçası",
            image: "images/rhea png.png",
            symbols: ["Aslan", "Taç", "Davul"],
            details: "Rhea, Titanların 'Annesi' olarak bilinen bir doğurganlık tanrıçasıdır. Kronos'un eşidir ve Olimpos tanrılarının (Zeus, Hera, Hades, Poseidon, Demeter, Hestia) annesidir. Oğlu Zeus'u babasının gazabından kurtarmayı başarmıştır."
        },
        {
            name: "Ouranos",
            title: "Gökyüzü ilahı",
            image: "images/Ouranos  png.png",
            symbols: ["Gökyüzü", "Yıldızlar", "Zodyak"],
            details: "Ouranos, Gaia'nın hem oğlu hem de eşi olan ilkel gökyüzü tanrısıdır. Titanların, Tepegözlerin (Cyclops) ve Hekatonkheirlerin (Yüz Kollular) babasıdır. Çocuklarından nefret ettiği için onları Gaia'nın rahmine geri hapsetmiş, bu da oğlu Kronos tarafından devrilmesine yol açmıştır."
        },
        {
            name: "Prometheus",
            title: "İnsanlığın kurtarıcısı titan",
            image: "images/Prometheus png.png",
            symbols: ["Ateş", "Zincir", "Kartal"],
            details: "Prometheus, 'öngörülü' anlamına gelen bir Titan'dır. İnsanlığı kilden yarattığına ve onlara tanrılardan çaldığı ateşi (bilgiyi ve medeniyeti) hediye ettiğine inanılır. Bu suçu yüzünden Zeus tarafından bir kayaya zincirlenip karaciğerinin her gün bir kartal tarafından yenmesiyle cezalandırılmıştır."
        },
        {
            name: "Epimetheus",
            title: "Düşüncesiz titan",
            image: "images/epimesheus png.png",
            symbols: ["Pandora'nın Kutusu", "Düşüncesizlik"],
            details: "Epimetheus, 'sonradan düşünen' anlamına gelen, Prometheus'un düşüncesiz kardeşidir. Kardeşinin uyarılarına rağmen tanrıların bir hediyesi olan Pandora'yı eş olarak kabul etmiş ve Pandora'nın kutusunu açarak dünyaya kötülüklerin yayılmasına neden olmuştur."
        },
        {
            name: "Atlas",
            title: "Göğü taşıyan titan",
            image: "images/atlas png.png",
            symbols: ["Gökyüzü Küresi", "Dayanıklılık", "Sütun"],
            details: "Atlas, Titanların Olimposlulara karşı savaşında liderlerden biriydi. Savaş kaybedilince Zeus tarafından gökyüzünü omuzlarında taşımakla cezalandırıldı. Bu ceza, evrenin düzenini korumanın bir sembolü haline gelmiştir."
        },
        {
            name: "Helios",
            romanName: "Sol",
            title: "Güneş tanrısı",
            image: "images/helios png,.png",
            symbols: ["Güneş Arabası", "Atlar", "Güneş Tacı"],
            details: "Helios, her gün ateşten atlarının çektiği arabasıyla gökyüzünü bir uçtan diğer uca kat ederek güneşi taşıyan Titan tanrısıdır. Her şeyi gören ve duyan olarak bilinir. Daha sonraki dönemlerde Apollo ile özdeşleştirilmiştir."
        },
        {
            name: "Selene",
            romanName: "Luna",
            title: "Ay tanrıçası",
            image: "images/selene png.png",
            symbols: ["Ay", "Gümüş Araba", "Meşale"],
            details: "Selene, Helios'un kız kardeşi ve ayın kişileştirilmiş halidir. Geceleri gümüş arabasıyla gökyüzünde süzülür. Ölümlü çoban Endymion'a olan tutkulu aşkıyla tanınır ve onu sonsuz bir uykuya daldırarak her gece ziyaret etmiştir."
        },
        {
            name: "Nike",
            romanName: "Victoria",
            title: "Zafer tanrıçası",
            image: "images/nıke png.png",
            symbols: ["Kanatlar", "Zafer Çelengi", "Palmiye Dalı"],
            details: "Nike, zaferin kanatlı tanrıçasıdır. Savaş, spor veya herhangi bir rekabette başarıyı temsil eder. Genellikle kazanan kişiye bir çelenk veya palmiye dalı sunarken tasvir edilir. Athena'nın yakın bir yoldaşıdır."
        },
        {
            name: "Nemesis",
            romanName: "Invidia",
            title: "İntikam tanrıçası",
            image: "images/nemesis png.png",
            symbols: ["Terazi", "Kılıç", "Kırbaç"],
            details: "Nemesis, kibre (hubris) kapılan ve ilahi düzene karşı gelen ölümlüleri cezalandıran tanrıçadır. İlahi intikamın ve dengenin kaçınılmaz gücünü temsil eder. Kimsenin hak ettiğinden fazlasını almadığından emin olur."
        },
        {
            name: "Tyche",
            romanName: "Fortuna",
            title: "Şans tanrıçası",
            image: "images/tyche png.png",
            symbols: ["Bereket Boynuzu", "Dümen", "Top"],
            details: "Tyche, şansın, talihin ve kaderin kaprisli tanrıçasıdır. Bir şehrin veya bir bireyin kaderini belirleyebilir. Genellikle gözleri bağlı olarak tasvir edilir, bu da şansının rastgeleliğini simgeler."
        },
        {
            name: "Moiralar",
            romanName: "Parcae",
            title: "Kaderin örücüleri",
            image: "images/moıralar png.png",
            symbols: ["İplik", "Makara", "Makas"],
            details: "Moiralar (Kaderler), her tanrının ve ölümlünün hayat ipliğini kontrol eden üç kız kardeştir: Klotho (ipliği eğiren), Lakhesis (ipliği ölçen) ve Atropos (ipliği kesen). Onların kararlarına Zeus bile karşı gelemezdi."
        },
        {
            name: "Eris",
            romanName: "Discordia",
            title: "Anlaşmazlık tanrıçası",
            image: "images/erıs png.png",
            symbols: ["Altın Elma", "Anlaşmazlık", "Kaos"],
            details: "Eris, her türlü kavga, çekişme ve rekabetin tanrıçasıdır. En bilinen eylemi, üzerine 'en güzele' yazılı altın elmayı bir düğüne atarak Hera, Athena ve Aphrodite arasında bir güzellik yarışması başlatması ve dolaylı olarak Troya Savaşı'nı tetiklemesidir."
        },
        {
            name: "Iris",
            romanName: "Arcus",
            title: "Gökkuşağı habercisi",
            image: "images/ırıs png.png",
            symbols: ["Gökkuşağı", "Sürahi", "Kanatlar"],
            details: "Iris, tanrıların, özellikle de Hera'nın habercisidir. Gökyüzü ile yeryüzü arasında bir köprü olan gökkuşağını kullanarak mesajları hızla iletir. Genellikle kanatlı ve bir haberci asası taşıyan genç bir kadın olarak tasvir edilir."
        },
        {
            name: "Perseus",
            title: "Medusa'yı yenen kahraman",
            image: "images/perseus png.png",
            symbols: ["Medusa'nın Başı", "Kanatlı Sandaletler", "Ayna gibi Kalkan"],
            details: "Perseus, en büyük Yunan kahramanlarından biridir. Tanrıların yardımıyla, baktığı kişiyi taşa çeviren Gorgon Medusa'yı öldürmeyi başarmış, deniz canavarı Cetus'u yenerek prenses Andromeda'yı kurtarmış ve Mycenae krallığını kurmuştur."
        },
        {
            name: "Herakles",
            romanName: "Herkül",
            title: "On iki görevin kahramanı",
            image: "images/herakles png.png",
            symbols: ["Aslan Postu", "Sopa", "Yay ve Ok"],
            details: "Herakles (Romalılarda Herkül), Zeus'un ölümlü bir kadından olan oğlu ve Yunan mitolojisinin en ünlü kahramanıdır. İnsanüstü bir güce sahiptir ve Hera'nın gazabı sonucu işlediği bir suçun kefareti olarak 'On İki Görev' olarak bilinen imkansız görevleri tamamlamıştır. Başarıları ona ölümsüzlüğü kazandırmıştır."
        },
        {
            name: "Theseus",
            title: "Minotor’un galibi",
            image: "images/theseus png.png",
            symbols: ["Labirent", "Minotor", "İplik Yumağı"],
            details: "Theseus, Atina'nın kurucu kralı ve en büyük kahramanıdır. En bilinen başarısı, Girit'teki Labirent'e girip yarı insan yarı boğa canavar Minotor'u öldürmesidir. Bu görevi, prenses Ariadne'nin verdiği bir iplik yumağı sayesinde başarmıştır."
        },
        {
            name: "Jason",
            title: "Argonotların lideri",
            image: "images/jason png.png",
            symbols: ["Altın Post", "Argo Gemisi", "Ejderha"],
            details: "Jason, amcası tarafından gasp edilen tahtını geri almak için efsanevi Altın Post'u bulmakla görevlendirilen bir kahramandır. Yunanistan'ın en büyük kahramanlarını (Herakles, Orpheus vb.) toplayarak 'Argo' adlı gemiyle yola çıkmış ve büyücü Medea'nın yardımıyla bu tehlikeli görevi başarmıştır."
        },
        {
            name: "Odysseus",
            romanName: "Ulysses",
            title: "Kurnaz kral",
            image: "images/oddysseus png.png",
            symbols: ["Troya Atı", "Yay", "Zeka"],
            details: "Odysseus, İthaka'nın kurnaz ve zeki kralıdır. Troya Savaşı'nın kazanılmasında kilit rol oynayan Troya Atı fikrinin sahibidir. Savaş sonrası evine dönüşü on yıl sürmüş ve bu yolculuk sırasında Tepegözler, Sirenler ve büyücü Kirke gibi birçok tehlikeyle zekası sayesinde başa çıkmıştır."
        },
        {
            name: "Achilles",
            romanName: "Achilles",
            title: "Yenilmez savaşçı",
            image: "images/achılles png.png",
            symbols: ["Topuk", "Zırh", "Mızrak"],
            details: "Achilles, Yunanların en büyük ve en güçlü savaşçısıydı. Annesi Thetis onu bebekken ölümsüzlük nehri Styx'e batırmış, ancak tuttuğu topuğu suya değmediği için tek zayıf noktası orası kalmıştır. Troya Savaşı'nda sayısız kahraman öldürmüş, ancak sonunda Paris tarafından topuğundan vurularak öldürülmüştür."
        },
        {
            name: "Hector",
            romanName: "Hector",
            title: "Troya’nın savunucusu",
            image: "images/hector png.png",
            symbols: ["Troya Surları", "Aile", "Onur"],
            details: "Hector, Troya kralı Priamos'un en büyük oğlu ve Troyalıların en cesur savaşçısıydı. Ailesine ve şehrine derinden bağlı, onurlu bir komutandı. Savaşın kaderini belirleyen bir dövüşte Achilles tarafından öldürülmüştür."
        },
        {
            name: "Paris",
            romanName: "Paris",
            title: "Troya prensi",
            image: "images/paris png.png",
            symbols: ["Güzellik Yarışması", "Yay", "Aşk"],
            details: "Paris, Hector'un küçük kardeşi olan Troya prensidir. Üç tanrıça arasındaki güzellik yarışmasında hakemlik yapmış ve en güzel kadınla evlenme vaadi karşılığında Aphrodite'i seçmiştir. Sparta kraliçesi Helen'i kaçırması, Troya Savaşı'nın başlamasına neden olmuştur."
        },
        {
            name: "Helen",
            romanName: "Helen",
            title: "Dünyanın en güzel kadını",
            image: "images/helen png.png",
            symbols: ["Güzellik", "Savaş", "Kaçırılma"],
            details: "Helen, Zeus'un kızı ve dünyanın en güzel ölümlü kadınıydı. Sparta kralı Menelaus ile evliyken, Paris tarafından kaçırılması (veya onunla kaçması) on yıl süren Troya Savaşı'nı başlatan olay olmuştur."
        },
        {
            name: "Oedipus",
            romanName: "Oedipus",
            title: "Trajik Thebai kralı",
            image: "images/oedıpus png.png",
            symbols: ["Kavşak", "Sfenks", "Körlük"],
            details: "Oedipus, hakkında 'babasını öldürüp annesiyle evleneceği' kehaneti bulunan trajik bir kahramandır. Kaderinden kaçmaya çalışırken farkında olmadan bu kehaneti gerçekleştirmiş ve gerçeği öğrendiğinde kendi gözlerini kör etmiştir."
        },
        {
            name: "Antigone",
            romanName: "Antigone",
            title: "Asi prenses",
            image: "images/antıgone png.png",
            symbols: ["Vicdan", "Devlet Yasası", "Mezar"],
            details: "Antigone, Oedipus'un kızıdır. Kral olan dayısı Kreon'un, hain ilan edilen erkek kardeşinin gömülmesini yasaklayan emrine karşı gelmiştir. Tanrıların yazısız yasalarının, insanların yasalarından daha üstün olduğuna inanarak kardeşini gömmüş ve bu yüzden ölüme mahkum edilmiştir."
        },
        {
            name: "Medea",
            romanName: "Medea",
            title: "Güçlü büyücü",
            image: "images/medea.png",
            symbols: ["Büyü İksirleri", "Ejderhalı Araba", "İntikam"],
            details: "Medea, Güneş tanrısı Helios'un soyundan gelen güçlü bir büyücüdür. Altın Post'u almasında Jason'a yardım etmiş ve onunla evlenmiştir. Ancak Jason onu başka bir kadın için terk edince, korkunç bir intikam alarak hem rakibini hem de Jason'dan olan kendi çocuklarını öldürmüştür."
        },
        {
            name: "Orpheus",
            romanName: "Orpheus",
            title: "Büyüleyici ozan",
            image: "images/Orpheus  png.png",
            symbols: ["Lir", "Müzik", "Kayıp Aşk"],
            details: "Orpheus, müziği ve şiiriyle tanrıları, insanları ve hatta cansız varlıkları bile büyüleyebilen efsanevi bir ozandı. Çok sevdiği karısı Eurydike öldüğünde, onu geri getirmek için yeraltı dünyasına inmiş, ancak tam çıkmak üzereyken arkasına bakma yasağını çiğnediği için onu sonsuza dek kaybetmiştir."
        },
        {
            name: "Eurydike",
            romanName: "Eurydice",
            title: "Trajik nymphe",
            image: "images/eurydıke png.png",
            symbols: ["Yılan Isırığı", "Yeraltı Dünyası", "Geriye Bakış"],
            details: "Eurydike, bir orman perisi (nymphe) ve Orpheus'un karısıydı. Düğün gününde bir yılan tarafından ısırılarak ölmüşlerdir. Kocası onu kurtarmak için yeraltına inse de, Orpheus'un tek bir anlık sabırsızlığı yüzünden yeryüzüne dönememiştir."
        },
        {
            name: "Sisyphos",
            romanName: "Sisyphus",
            title: "Cezalı kral",
            image: "images/sısphos.png",
            symbols: ["Kaya", "Tepe", "Sonsuz Çaba"],
            details: "Sisyphos, tanrıları kandıracak kadar kurnaz bir kraldı. Ölümü bile alt etmeye çalışınca, Zeus tarafından yeraltı dünyasında sonsuza dek büyük bir kayayı bir tepenin zirvesine itmekle cezalandırıldı. Ancak kaya zirveye her ulaştığında tekrar aşağı yuvarlanıyordu, bu da onun çabasını anlamsız ve sonsuz kılıyordu."
        },
        {
            name: "Tantalos",
            romanName: "Tantalus",
            title: "Kibirli kral",
            image: "images/tantalos png.png",
            symbols: ["Ulaşılamayan Su", "Ulaşılamayan Meyve", "Ebedi Azap"],
            details: "Tantalos, tanrıların sırlarını çalan ve onlara kendi oğlunu yemek olarak sunan kibirli bir kraldı. Cezası, yeraltında çenesine kadar gelen bir suyun içinde durup, tam içecekken suyun çekilmesi ve başının üzerindeki meyve dallarının tam uzanacakken yükselmesiydi. Sonsuz bir açlık ve susuzluğa mahkum edildi."
        },
        {
            name: "Icarus",
            romanName: "Icarus",
            title: "Düşen genç",
            image: "images/ıcarus png.png",
            symbols: ["Balmumu Kanatlar", "Güneş", "Kibir"],
            details: "Icarus, babası dahi mimar Daedalus'un yaptığı balmumu ve tüyden kanatları kullanarak Girit'ten kaçmaya çalışan gençti. Babasının ne çok alçaktan ne de çok yüksekten uçması yönündeki uyarısını dinlemeyip kibrine yenik düşerek güneşe çok yaklaştı. Balmumu eriyince kanatları dağıldı ve denize düşerek öldü."
        },
        {
            name: "Daedalus",
            romanName: "Daedalus",
            title: "Dahiyane mimar",
            image: "images/daedalus png.png",
            symbols: ["Labirent", "Kanatlar", "Mucitlik"],
            details: "Daedalus, Atinalı dahi bir zanaatkar, sanatçı ve mucitti. Girit kralı Minos için Minotor'u hapsetmek üzere ünlü Labirent'i inşa etmiştir. Kral onu ve oğlu Icarus'u adada esir tutunca, kaçmak için tüylerden ve balmumundan kanatlar yapmıştır."
        },
        {
            name: "Pandora",
            romanName: "Pandora",
            title: "İlk kadın",
            image: "images/pandora png.png",
            symbols: ["Kutu (Aslında Kavanoz)", "Umut", "Merak"],
            details: "Pandora, Prometheus'un ateşi çalmasına karşılık insanlığa bir ceza olarak tanrılar tarafından yaratılan ilk kadındı. Ona tanrılar tarafından asla açmaması söylenen bir kutu (aslında bir kavanoz) verildi. Merakına yenik düşüp kutuyu açınca, içindeki tüm kötülükler (hastalık, acı, keder) dünyaya yayıldı. Kutuda kalan tek şey ise 'Umut' oldu."
        },
        {
            name: "Chiron",
            romanName: "Chiron",
            title: "Bilge kentaur",
            image: "images/chıron png.png",
            symbols: ["Bilgelik", "Öğretmenlik", "Şifa"],
            details: "Chiron, diğer kentaur (yarı insan, yarı at varlıklar) gibi vahşi ve barbar değil, aksine bilge, nazik ve yetenekli bir öğretmendi. Tıp, müzik ve avcılıkta ustaydı ve Achilles, Herakles, Jason gibi birçok büyük kahramana hocalık yapmıştır."
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


    // Sayfa kaydırıldığında yukarı çık butonunu göster/gizle
    window.onscroll = function() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            backToTopButton.style.display = "block";
        } else {
            backToTopButton.style.display = "none";
        }
    };

    // Yukarı çık butonuna tıklandığında sayfanın en üstüne kaydır
    backToTopButton.addEventListener('click', () => {
        document.body.scrollTop = 0; // Safari için
        document.documentElement.scrollTop = 0; // Chrome, Firefox, IE ve Opera için
    });

    // Karakter kartlarını oluştur ve göster
    function displayCharacters(chars) {
        gallery.innerHTML = ''; // Mevcut kartları temizle
        chars.forEach(character => {
            const card = document.createElement('div');
            card.className = 'character-card';
            
            card.innerHTML = `
                <img src="${character.image}" alt="${character.name}" onerror="this.onerror=null; this.src='https://via.placeholder.com/250x220.png?text=Görsel+Yüklenemedi';" onload="this.classList.add('loaded');">
                <h2>${character.name}</h2>
                <p class="title">${character.title}</p>
            `;

            card.addEventListener('click', () => {
                openModal(character);
            });

            gallery.appendChild(card);
        });
    }

    // Arama işlevi
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

    // Sayfa yüklendiğinde tüm karakterleri göster
    displayCharacters(characters);

    // Modal'ı açan fonksiyon
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

    // Modal'ı kapatan fonksiyon
    function closeModal() {
        modal.style.display = 'none';
    }

    // Kapatma olayları
    closeModalBtn.addEventListener('click', closeModal);
    modal.addEventListener('click', (event) => {
        // Sadece modal'ın arka planına tıklanırsa kapat
        if (event.target === modal) {
            closeModal();
        }
    });

    // Soy ağacı bölümünü göster/gizle
    toggleFamilyTreeButton.addEventListener('click', () => {
        if (familyTreeSection.classList.contains('hidden-section')) {
            familyTreeSection.classList.remove('hidden-section');
            gallery.style.display = 'none'; // Karakter galerisini gizle
            toggleFamilyTreeButton.textContent = 'Karakterleri Göster';
            displayAllCharactersForFamilyTree(); // Tüm karakterleri listele
        } else {
            familyTreeSection.classList.add('hidden-section');
            gallery.style.display = 'grid'; // Karakter galerisini göster
            toggleFamilyTreeButton.textContent = 'Soy Ağacını Göster';
            familyTreeContainer.innerHTML = ''; // Soy ağacını temizle
            selectedCharacterInfo.style.display = 'none'; // Seçilen karakter bilgisini gizle
        }
    });

    function displayAllCharactersForFamilyTree() {
        familyTreeContainer.innerHTML = '';
        selectedCharacterInfo.style.display = 'none';

        const characterNames = Object.keys(familyData).sort(); // Alfabetik sırala

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
            childrenTitle.textContent = 'Çocuklar:';
            childrenGroup.appendChild(childrenTitle);
            charData.children.forEach(child => {
                childrenGroup.appendChild(createNode(child));
            });
            familyTreeContainer.appendChild(childrenGroup);
            positionText += `Çocuklar: ${charData.children.join(', ')}\n`;
        } else {
            positionText += `Çocuklar: Yok\n`;
        }

        // Display Siblings
        if (charData.siblings.length > 0) {
            const siblingsGroup = document.createElement('div');
            siblingsGroup.className = 'family-details-group';
            const siblingsTitle = document.createElement('h4');
            siblingsTitle.textContent = 'Kardeşler:';
            siblingsGroup.appendChild(siblingsTitle);
            charData.siblings.forEach(sibling => {
                siblingsGroup.appendChild(createNode(sibling));
            });
            familyTreeContainer.appendChild(siblingsGroup);
            positionText += `Kardeşler: ${charData.siblings.join(', ')}\n`;
        } else {
            positionText += `Kardeşler: Yok\n`;
        }

        characterPosition.textContent = positionText;
    }

});
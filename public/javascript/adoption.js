var bird="\
	<optgroup label='Birds Species'>\
	<option>African Greys</option>\
	<option>Amazons</option>\
	<option>Caiques</option>\
	<option>Canaries</option>\
	<option>Cockatiels</option>\
	<option>Crows</option>\
	<option>Doves & Pigeons</option>\
	<option>Eclectus</option>\
	<option>Finches</option>\
	<option>Hawk Headed Parrots</option>\
	<option>Large Cockatoos</option>\
	<option>Large Conures</option>\
	<option>Large Parakeets</option>\
	<option>Lories & Lorikeets</option>\
	<option>Lovebirds</option>\
	<option>Macaws</option>\
	<option>Mini-Macaws</option>\
	<option>Mynah Birds</option>\
	<option>Parrotlets</option>\
	<option>Pionus Parrots</option>\
	<option>Poicephalus</option>\
	<option>Small Cockatoos</option>\
	<option>Small Conures</option>\
	<option>Small Parakeets</option>\
	<option>Toucans</option>\
	<option>Other</option>\
	</optgroup>";

var cat="\
	<optgroup label='Cat Breeds'>\
	<option>Abyssinian</option>\
	<option>American Bobtail</option>\
	<option>American Curl</option>\
	<option>American Shorthair</option>\
	<option>American Wirehair</option>\
	<option>Balinese</option>\
	<option>Birman</option>\
	<option>Bombay</option>\
	<option>British Shorthair</option>\
	<option>Burmese</option>\
	<option>Chartreux</option>\
	<option>Colorpoint Shorthair</option>\
	<option>Cornish Rex</option>\
	<option>Devon Rex</option>\
	<option>Egyptian Mau</option>\
	<option>European Burmese</option>\
	<option>Exotic</option>\
	<option>Havana Brown</option>\
	<option>Japanese Bobtail</option>\
	<option>Javanese</option>\
	<option>Korat</option>\
	<option>LaPerm</option>\
	<option>Maine Coon</option>\
	<option>Manx</option>\
	<option>Mixed</option>\
	<option>Norwegian Forest Cat</option>\
	<option>Ocicat</option>\
	<option>Oriental</option>\
	<option>Persian</option>\
	<option>RagaMuffin</option>\
	<option>Ragdoll</option>\
	<option>Russian Blue</option>\
	<option>Scottish Fold</option>\
	<option>Selkirk Rex</option>\
	<option>Siamese</option>\
	<option>Siberian</option>\
	<option>Singapura</option>\
	<option>Somali</option>\
	<option>Sphynx</option>\
	<option>Tonkinese</option>\
	<option>Turkish Angora</option>\
	<option>Turkish Van</option>\
	</optgroup>"
var dog="\
	<optgroup label='Dog Breeds'>\
	<option>Affenpinscher</option>\
	<option>Afghan Hound</option>\
	<option>Airedale Terrier</option>\
	<option>Alaskan Malamute</option>\
	<option>American Staffordshire Bull Terrier</option>\
	<option>Anatolian Shepherd Dog</option>\
	<option>Australian Cattle Dog</option>\
	<option>Australian Kelpie</option>\
	<option>Australian Shepherd Dog</option>\
	<option>Australian Silky Terrier</option>\
	<option>Australian Terrier</option>\
	<option>Basenji</option>\
	<option>Basset Fauve de Bretagne</option>\
	<option>Basset Hound</option>\
	<option>Beagle</option>\
	<option>Bearded Collie</option>\
	<option>Bedlington Terrier</option>\
	<option>Belgian Shepherd Dog Groenendael</option>\
	<option>Belgian Shepherd Dog Laekenois</option>\
	<option>Belgian Shepherd Dog Malinois</option>\
	<option>Belgian Shepherd Dog Tervueren</option>\
	<option>Bernese Mountain Dog</option>\
	<option>Bichon Frise</option>\
	<option>Bloodhound</option>\
	<option>Border Collie</option>\
	<option>Border Terrier</option>\
	<option>Borzoi</option>\
	<option>Boston Terrier</option>\
	<option>Bouvier des Flandres</option>\
	<option>Boxer</option>\
	<option>Bracco Italiano</option>\
	<option>Briard</option>\
	<option>Brittany</option>\
	<option>Bull Terrier</option>\
	<option>Bull Terrier Miniature</option>\
	<option>Bulldog</option>\
	<option>Bullmastiff</option>\
	<option>Cairn Terrier</option>\
	<option>Cavalier King Charles Spaniel</option>\
	<option>Cesky Terrier</option>\
	<option>Chesapeake Bay Retriever</option>\
	<option>Chihuahua (Smooth Coat)</option>\
	<option>Chinese Crested</option>\
	<option>Chow Chow (Smooth)</option>\
	<option>Clumber Spaniel</option>\
	<option>Collie (Rough)</option>\
	<option>Collie (Smooth)</option>\
	<option>Curly-Coated Retriever</option>\
	<option>Dachshund (Miniature Long Haired)</option>\
	<option>Dachshund (Miniature Smooth Haired)</option>\
	<option>Dachshund (Miniature Wire Haired)</option>\
	<option>Dachshund (Smooth Haired)</option>\
	<option>Dachshund (Wire Haired)</option>\
	<option>Dalmatian</option>\
	<option>Dandie Dinmont Terrier</option>\
	<option>Deerhound</option>\
	<option>Dobermann</option>\
	<option>Dogue de Bordeaux</option>\
	<option>English Setter</option>\
	<option>English Springer Spaniel</option>\
	<option>English Toy Terrier (Black & Tan)</option>\
	<option>Field Spaniel</option>\
	<option>Finnish Lapphund</option>\
	<option>Finnish Spitz</option>\
	<option>Flat-Coated Retriever</option>\
	<option>Fox Terrier Smooth Coat</option>\
	<option>Fox Terrier Wire Coat</option>\
	<option>Foxhound</option>\
	<option>French Bulldog</option>\
	<option>German Shepherd Dog</option>\
	<option>German Short-Haired Pointer</option>\
	<option>German Spitz Klein</option>\
	<option>German Wire-Haired Pointer</option>\
	<option>Golden Retriever</option>\
	<option>Gordon Setter</option>\
	<option>Great Dane</option>\
	<option>Greyhound</option>\
	<option>Harrier Hound</option>\
	<option>Hungarian Vizsla</option>\
	<option>Hungarian Wire-Haired Vizsla</option>\
	<option>Ibizan Hound</option>\
	<option>Irish Setter</option>\
	<option>Irish Terrier</option>\
	<option>Irish Water Spaniel</option>\
	<option>Irish Wolfhound</option>\
	<option>Italian Greyhound</option>\
	<option>Japanese Akita</option>\
	<option>Japanese Chin</option>\
	<option>Japanese Spitzv</option>\
	<option>Keeshond</option>\
	<option>Kerry Blue Terrier</option>\
	<option>King Charles Spaniel</option>\
	<option>Labrador Retriever</option>\
	<option>Lakeland Terrier</option>\
	<option>Leonberger</option>\
	<option>Lhaso Apso</option>\
	<option>Lowchen</option>\
	<option>Maltese</option>\
	<option>Manchester Terrier</option>\
	<option>Maremma Sheepdog</option>\
	<option>Mastiff</option>\
	<option>Mixed</option>\
	<option>Newfoundland</option>\
	<option>Norfolk Terrier</option>\
	<option>Norwich Terrier</option>\
	<option>Nova Scotia Duck Tolling Retriever</option>\
	<option>Old English Sheepdog</option>\
	<option>Papillon</option>\
	<option>Parson Jack Russell Terrier</option>\
	<option>Pharaoh Hound</option>\
	<option>Pointer</option>\
	<option>Pomeranian</option>\
	<option>Poodle Miniature</option>\
	<option>Poodle Standard</option>\
	<option>Poodle Toy</option>\
	<option>Portuguese Water Dog</option>\
	<option>Pug</option>\
	<option>Pyrenean Mountain Dog</option>\
	<option>Rhodesian Ridgeback</option>\
	<option>Rottweiler</option>\
	<option>Saluki</option>\
	<option>Samoyed</option>\
	<option>Schipperke</option>\
	<option>Schnauzer Giant</option>\
	<option>Schnauzer Miniature</option>\
	<option>Schnauzer Standard</option>\
	<option>Scottish Terrier</option>\
	<option>Shar Pei</option>\
	<option>Shetland Sheepdog</option>\
	<option>Shih Tzu</option>\
	<option>Siberian Husky</option>\
	<option>Skye Terrier</option>\
	<option>Sloughi</option>\
	<option>Soft Coated Wheaten Terrier</option>\
	<option>St Bernard</option>\
	<option>Sussex Spaniel</option>\
	<option>Swedish Vallhund</option>\
	<option>Tenterfield Terrier</option>\
	<option>Tibetan Mastiff</option>\
	<option>Tibetan Spaniel</option>\
	<option>Tibetan Terrier</option>\
	<option>Weimaraner</option>\
	<option>Welsh Corgi (Cardigan)</option>\
	<option>Welsh Corgi (Pembroke)</option>\
	<option>Welsh Springer Spaniel</option>\
	<option>Welsh Terrier</option>\
	<option>West Highland White Terrier</option>\
	<option>Whippet</option>\
	<option>Yorkshire Terrier</option>\
	</optgroup>"
var fish="\
	<optgroup label='Fish Species'>\
		<option>Angelfish</option>\
		<option>Barbs</option>\
		<option>Bettas</option>\
		<option>Cichlids</option>\
		<option>Discus</option>\
		<option>Goldfish</option>\
		<option>Gouramis</option>\
		<option>Koi Carp</option>\
		<option>Rainbow Fish</option>\
		<option>Tetras</option>\
		<option>Other</option>\
	</optgroup>"
var reptile="\
	<optgroup label='Reptile Type'>\
	<option>Lizards</option>\
	<option>Snakes</option>\
	<option>Turtles</option>\
	<option>Other</option>\
	</optgroup>"
var rodent="\
	<optgroup label='Rodent Type'>\
	<option>Chinchilla</option>\
	<option>Guinea Pigs</option>\
	<option>Rabbits</option>\
	<option>Hamsters</option>\
	<option>Other</option>\
	</optgroup>"


function autocomplete(inp, arr) {
	/*the autocomplete function takes two arguments,
	the text field element and an array of possible autocompleted values:*/
	var currentFocus;
	/*execute a function when someone writes in the text field:*/
	inp.addEventListener("input", function(e) {
		var a, b, i, val = this.value;
		/*close any already open lists of autocompleted values*/
		closeAllLists();
		if (!val) { return false;}
		currentFocus = -1;
		/*create a DIV element that will contain the items (values):*/
		a = document.createElement("DIV");
		a.setAttribute("id", this.id + "autocomplete-list");
		a.setAttribute("class", "autocomplete-items");
		/*append the DIV element as a child of the autocomplete container:*/
		this.parentNode.appendChild(a);
		/*for each item in the array...*/
		for (i = 0; i < arr.length; i++) {
			/*check if the item starts with the same letters as the text field value:*/
			if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
			/*create a DIV element for each matching element:*/
			b = document.createElement("DIV");
			/*make the matching letters bold:*/
			b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
			b.innerHTML += arr[i].substr(val.length);
			/*insert a input field that will hold the current array item's value:*/
			b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
			/*execute a function when someone clicks on the item value (DIV element):*/
			b.addEventListener("click", function(e) {
				/*insert the value for the autocomplete text field:*/
				inp.value = this.getElementsByTagName("input")[0].value;
				/*close the list of autocompleted values,
				(or any other open lists of autocompleted values:*/
				closeAllLists();
			});
			a.appendChild(b);
			}
		}
	});
	/*execute a function presses a key on the keyboard:*/
	inp.addEventListener("keydown", function(e) {
		var x = document.getElementById(this.id + "autocomplete-list");
		if (x) x = x.getElementsByTagName("div");
		if (e.keyCode == 40) {
			/*If the arrow DOWN key is pressed,
			increase the currentFocus variable:*/
			currentFocus++;
			/*and and make the current item more visible:*/
			addActive(x);
		} else if (e.keyCode == 38) { //up
			/*If the arrow UP key is pressed,
			decrease the currentFocus variable:*/
			currentFocus--;
			/*and and make the current item more visible:*/
			addActive(x);
		} else if (e.keyCode == 13) {
			/*If the ENTER key is pressed, prevent the form from being submitted,*/
			e.preventDefault();
			if (currentFocus > -1) {
			/*and simulate a click on the "active" item:*/
			if (x) x[currentFocus].click();
			}
		}
	});
	function addActive(x) {
		/*a function to classify an item as "active":*/
		if (!x) return false;
		/*start by removing the "active" class on all items:*/
		removeActive(x);
		if (currentFocus >= x.length) currentFocus = 0;
		if (currentFocus < 0) currentFocus = (x.length - 1);
		/*add class "autocomplete-active":*/
		x[currentFocus].classList.add("autocomplete-active");
	}
	function removeActive(x) {
		/*a function to remove the "active" class from all autocomplete items:*/
		for (var i = 0; i < x.length; i++) {
		x[i].classList.remove("autocomplete-active");
		}
	}
	function closeAllLists(elmnt) {
		/*close all autocomplete lists in the document,
		except the one passed as an argument:*/
		var x = document.getElementsByClassName("autocomplete-items");
		for (var i = 0; i < x.length; i++) {
		if (elmnt != x[i] && elmnt != inp) {
			x[i].parentNode.removeChild(x[i]);
		}
		}
	}
	/*execute a function when someone clicks in the document:*/
	document.addEventListener("click", function (e) {
		closeAllLists(e.target);
	});
}

var pet_auto =["abyssinian", "affenpinscher", "afghan hound", "african greys", "airedale terrier", "alaskan malamute", "amazons", "american bobtail", "american curl", "american shorthair", "american staffordshire bull terrier", "american wirehair", "anatolian shepherd dog", "angelfish", "australian cattle dog", "australian kelpie", "australian shepherd dog", "australian silky terrier", "australian terrier", "balinese", "barbs", "basenji", "basset fauve de bretagne", "basset hound", "beagle", "bearded collie", "bedlington terrier", "belgian shepherd dog groenendael", "belgian shepherd dog laekenois", "belgian shepherd dog malinois", "belgian shepherd dog tervueren", "bernese mountain dog", "bettas", "bichon frise", "bird", "birman", "bloodhound", "bombay", "border collie", "border terrier", "borzoi", "boston terrier", "bouvier des flandres", "boxer", "bracco italiano", "briard", "british shorthair", "brittany", "bull terrier", "bull terrier miniature", "bulldog", "bullmastiff", "burmese", "caiques", "cairn terrier", "canaries", "cat", "cavalier king charles spaniel", "cesky terrier", "chartreux", "chesapeake bay retriever", "chihuahua (smooth coat)", "chinchilla", "chinese crested", "chow chow (smooth)", "cichlids", "clumber spaniel", "cockatiels", "collie (rough)", "collie (smooth)", "colorpoint shorthair", "cornish rex", "crows", "curly-coated retriever", "dachshund (miniature long haired)", "dachshund (miniature smooth haired)", "dachshund (miniature wire haired)", "dachshund (smooth haired)", "dachshund (wire haired)", "dalmatian", "dandie dinmont terrier", "deerhound", "devon rex", "discus", "dobermann", "dog", "dogue de bordeaux", "doves & pigeons", "eclectus", "egyptian mau", "english setter", "english springer spaniel", "english toy terrier (black & tan)", "european burmese", "exotic", "field spaniel", "finches", "finnish lapphund", "finnish spitz", "fish", "flat-coated retriever", "fox terrier smooth coat", "fox terrier wire coat", "foxhound", "french bulldog", "german shepherd dog", "german short-haired pointer", "german spitz klein", "german wire-haired pointer", "golden retriever", "goldfish", "gordon setter", "gouramis", "great dane", "greyhound", "guinea pigs", "hamsters", "harrier hound", "havana brown", "hawk headed parrots", "hungarian vizsla", "hungarian wire-haired vizsla", "ibizan hound", "irish setter", "irish terrier", "irish water spaniel", "irish wolfhound", "italian greyhound", "japanese akita", "japanese bobtail", "japanese chin", "japanese spitzv", "javanese", "keeshond", "kerry blue terrier", "king charles spaniel", "koi carp", "korat", "labrador retriever", "lakeland terrier", "laperm", "large cockatoos", "large conures", "large parakeets", "leonberger", "lhaso apso", "lizards", "lories & lorikeets", "lovebirds", "lowchen", "macaws", "maine coon", "maltese", "manchester terrier", "manx", "maremma sheepdog", "mastiff", "mini-macaws", "mixed", "mynah birds", "newfoundland", "norfolk terrier", "norwegian forest cat", "norwich terrier", "nova scotia duck tolling retriever", "ocicat", "old english sheepdog", "oriental", "papillon", "parrotlets", "parson jack russell terrier", "persian", "pharaoh hound", "pionus parrots", "poicephalus", "pointer", "pomeranian", "poodle miniature", "poodle standard", "poodle toy", "portuguese water dog", "pug", "pyrenean mountain dog", "rabbits", "ragamuffin", "ragdoll", "rainbow fish", "reptile", "rhodesian ridgeback", "rodent", "rottweiler", "russian blue", "saluki", "samoyed", "schipperke", "schnauzer giant", "schnauzer miniature", "schnauzer standard", "scottish fold", "scottish terrier", "selkirk rex", "shar pei", "shetland sheepdog", "shih tzu", "siamese", "siberian", "siberian husky", "singapura", "skye terrier", "sloughi", "small cockatoos", "small conures", "small parakeets", "snakes", "soft coated wheaten terrier", "somali", "sphynx", "st bernard", "sussex spaniel", "swedish vallhund", "tenterfield terrier", "tetras", "tibetan mastiff", "tibetan spaniel", "tibetan terrier", "tonkinese", "toucans", "turkish angora", "turkish van", "turtles", "weimaraner", "welsh corgi (cardigan)", "welsh corgi (pembroke)", "welsh springer spaniel", "welsh terrier", "west highland white terrier", "whippet", "yorkshire terrier"];

autocomplete(document.getElementById("auto_complete"), pet_auto);
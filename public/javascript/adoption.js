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
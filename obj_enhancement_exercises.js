function createInstructor(first, last){
    return {
        first,
        last
    }; 
};

let favoriteNum = 42;
const instructor = {
    firstName : "Colt",
    [favoriteNum] : "That is my favorite!"    
};

const instructor1 = {
    firstName : "Colt",
    sayHi(){
        return "Hi!";
    },
    sayBye(){
        return this.firstName + " says bye!";
    }
};

function createAnimal(species, verb, noise){
    return {
        species,
        [verb](){
            return noise;
        }
    };
};

const d = createAnimal("dog", "bark", "woof!");
const s = createAnimal("sheep", "bleet", "BAAAAaaaa");
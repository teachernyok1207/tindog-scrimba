// Create the Dog class here
import dogs from './data.js'

class getDogHtml{
    constructor(data){
        Object.assign(this, data)
    }
    setDogDetails(){
        const { name, avatar, age, bio } = this
        
        // Render Dog
        return `
            <!-- Rendering Dog's Image -->
            <img id="dog-images" src="${avatar}">
            
            <!-- Rendering Dog's Remarks -->
            <img id="dog-remarks" src="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=">
            
            <!-- Rendering Dog's Name and Age -->
            <h2 id="dog-name-age">${name}, ${age}</h1>
            <h4 id="dog-bio">${bio}</h4>
        `
    }
    
    setDogAsSwiped(){
        this.hasBeenSwiped = true
    }
    
    setDogAsLiked(){
        this.hasBeenLiked = true
    }
}

export default getDogHtml
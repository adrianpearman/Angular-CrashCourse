export class LikeComponent{
    constructor(public likesCount: number, public isSelected: boolean){}

    onClick(){
        // Version 1
        // if (this.isSelected) {
        //     this.likesCount--
        //      this.isSelected = false
        // }else{
        //     this.likesCount++
        //     this.isSelected = true
        // }

        // Version 2 - refactored
        this.likesCount += (this.isSelected) ? 1 : -1
        this.isSelected = !this.isSelected
    }
}
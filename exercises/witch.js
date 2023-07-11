class Witch{
  constructor(name){
    this.name = name;
    this.pantry = {};
    this.recipes = [];
    this.potions = {}
  }

  collect(resource, count) {
    if(this.pantry[resource]){ 
      this.pantry[resource] += count;
    }else{
      this.pantry[resource] = count;
    }
  }

  learnRecipe(recipe){
    if(this.hasRecipeAlready(recipe)){
      return 'Already know: Plain Water'
    }else{
      this.recipes.push(recipe)
      return `Learned: ${recipe.name}`
    }
  }

  hasRecipeAlready(recipe){
    return this.recipeNames().includes(recipe.name)
  }

  recipeNames(){
    var recipeNameArray = []
    this.recipes.forEach(recipe => recipeNameArray.push(recipe.name))
    return recipeNameArray
  }

  hasEnoughIngredients(recipe){
    for (const ingredientName in recipe.ingredients) {
      if(this.pantry[ingredientName] < recipe.ingredients[ingredientName]){
        return false
      };
    }
    return true
  }

  addPotion(recipe){
    if(this.potions[recipe.name]){
      this.potions[recipe.name]++
    }else{
      this.potions[recipe.name] = 1
    }
  }

  recipeKnown(recipe){
    return this.recipes.includes(recipe)
  }

  reduceStock(recipe){
    for (const ingredientName in recipe.ingredients) {
      this.pantry[ingredientName] -= recipe.ingredients[ingredientName]
    }
  }

  brewPotion(recipe){
    if(!this.recipeKnown(recipe)){
      return `Don't know recipe: ${recipe.name}`
    }else if(this.hasEnoughIngredients(recipe)){
      this.addPotion(recipe)
      this.reduceStock(recipe)
      return `Brewed 1 ${recipe.name}`
    }else{
      return `Not enough ingredients. Need: ${this.missingIngredientsString(recipe)}`
    }   
  }

  missingIngredientsString(recipe){
   var stringArray = []
    for (const ingredientName in recipe.ingredients) {
      if(this.pantry[ingredientName]){
        var pantryIngredientValue = this.pantry[ingredientName] - recipe.ingredients[ingredientName]
        if(pantryIngredientValue < 0){
          stringArray.push(`(${pantryIngredientValue * -1} ${ingredientName})`)
        }
      }else{
        stringArray.push(`(${recipe.ingredients[ingredientName]} ${ingredientName})`)
      }
    }
    return stringArray.join(" ")
  }
}

module.exports = Witch;
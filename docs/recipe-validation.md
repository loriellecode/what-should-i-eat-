# Lunch and dinner recipe validation

Every serving below was added up from the ingredient-level numbers stored with each recipe (calories, protein, carbs, fat, fiber per ingredient). 
Limits: lunch 250 calories, dinner 400 calories per serving. Base version means no optional ingredients ticked. 
Reference values are USDA FoodData Central style per-100 g values entered from standard tables (they were not looked up live per ingredient); packaged items (nuggets, fries, tater tots, pita, flatbread, cauliflower crust, ranch, BBQ sauce, imitation crab) use a typical label allowance that is flagged in the recipe and editable in the app.

| Recipe | Serving | Limit | Calories | Protein | Carbs | Fat | Fiber | With optional | Status |
|---|---|---|---|---|---|---|---|---|---|
| Chicken, Tomato & Melted Cheese Pita | Lunch | 250 | 240 | 25 g | 23 g | 5 g | 2 g | 240 | within limit |
| Crispy Chicken & Cheese Pita Melt | Lunch | 250 | 224 | 20 g | 24 g | 5 g | 2 g | 224 | within limit |
| Cheesy Garlic Chicken Quesadilla | Lunch | 250 | 213 | 20 g | 16 g | 7 g | 1 g | 213 | within limit |
| Chicken, Spinach & Tomato Quesadilla | Lunch | 250 | 213 | 20 g | 18 g | 6 g | 2 g | 213 | within limit |
| BBQ Chicken & Cheddar Quesadilla | Lunch | 250 | 240 | 19 g | 22 g | 8 g | 1 g | 240 | within limit |
| Crispy Chicken & Cheese Rice-Paper Pocket | Lunch | 250 | 212 | 22 g | 18 g | 5 g | 1 g | 212 | within limit |
| Crispy Cajun Chicken Rice-Paper Rolls | Lunch | 250 | 203 | 18 g | 20 g | 5 g | 1 g | 203 | within limit |
| Cheesy Chicken, Broccoli & Cauliflower Bowl | Lunch | 250 | 199 | 24 g | 8 g | 8 g | 4 g | 199 | within limit |
| Creamy Garlic Chicken & Spinach Egg Noodle Pasta | Lunch | 250 | 222 | 23 g | 19 g | 6 g | 1 g | 222 | within limit |
| Cheesy Chicken & Broccoli Baked Potato | Lunch | 250 | 232 | 20 g | 25 g | 6 g | 4 g | 232 | within limit |
| Cajun Chicken & Crispy Potato Bowl | Lunch | 250 | 222 | 21 g | 22 g | 6 g | 4 g | 222 | within limit |
| Seasoned Chicken Nuggets & Crispy Potato Bites | Lunch | 250 | 236 | 8 g | 21 g | 13 g | 2 g | 236 | within limit |
| Chicken Nuggets, Sweet Potato Fries & Ranch | Lunch | 250 | 232 | 8 g | 20 g | 13 g | 2 g | 232 | within limit |
| Mini Cheeseburger Pita | Lunch | 250 | 241 | 17 g | 20 g | 10 g | 1 g | 241 | within limit |
| Cheesy Beef & Burger Sauce Pita | Lunch | 250 | 247 | 18 g | 21 g | 10 g | 1 g | 247 | within limit |
| Lemon Chicken & Spinach Salad | Lunch | 250 | 192 | 22 g | 8 g | 8 g | 2 g | 192 | within limit |
| Lemon Shrimp & Spinach Salad | Lunch | 250 | 183 | 21 g | 9 g | 8 g | 4 g | 183 | within limit |
| Ranch Chicken & Cheddar Spinach Salad | Lunch | 250 | 235 | 23 g | 7 g | 13 g | 2 g | 235 | within limit |
| Salmon Avocado Sushi Rolls | Lunch serving: 1 roll | 250 | 197 | 10 g | 22 g | 8 g | 2 g | 197 | within limit |
| Salmon Avocado Sushi Rolls | Dinner serving: 2 rolls | 400 | 385 | 21 g | 40 g | 16 g | 4 g | 385 | within limit |
| Shrimp Avocado Sushi Rolls | Lunch serving: 1 roll | 250 | 178 | 13 g | 23 g | 4 g | 2 g | 178 | within limit |
| Shrimp Avocado Sushi Rolls | Dinner serving: 2 rolls | 400 | 311 | 22 g | 40 g | 7 g | 4 g | 311 | within limit |
| California-Style Imitation Crab Rolls | Lunch serving: 1 roll | 250 | 177 | 9 g | 26 g | 4 g | 2 g | 189 | within limit |
| California-Style Imitation Crab Rolls | Dinner serving: 2 rolls | 400 | 308 | 16 g | 45 g | 8 g | 4 g | 333 | within limit |
| Baked Salmon Sushi Bowl | Lunch serving | 250 | 243 | 13 g | 24 g | 11 g | 2 g | 243 | within limit |
| Baked Salmon Sushi Bowl | Dinner serving | 400 | 385 | 20 g | 39 g | 16 g | 3 g | 385 | within limit |
| Crispy Shrimp Spring Rolls | Lunch serving: 2 rolls | 250 | 198 | 16 g | 28 g | 2 g | 2 g | 198 | within limit |
| Crispy Shrimp Spring Rolls | Dinner serving: 3 rolls | 400 | 310 | 27 g | 43 g | 3 g | 3 g | 310 | within limit |
| Crispy Chicken Spring Rolls | Lunch serving: 2 rolls | 250 | 223 | 18 g | 28 g | 3 g | 2 g | 223 | within limit |
| Crispy Chicken Spring Rolls | Dinner serving: 3 rolls | 400 | 341 | 28 g | 43 g | 5 g | 3 g | 341 | within limit |
| Cheesy Garlic Chicken & Broccoli Bowl | Lunch serving | 250 | 209 | 20 g | 22 g | 4 g | 2 g | 209 | within limit |
| Cheesy Garlic Chicken & Broccoli Bowl | Dinner serving | 400 | 368 | 37 g | 38 g | 7 g | 4 g | 368 | within limit |
| Garlic Shrimp & Egg Noodles | Lunch serving | 250 | 202 | 21 g | 20 g | 4 g | 2 g | 202 | within limit |
| Garlic Shrimp & Egg Noodles | Dinner serving | 400 | 345 | 35 g | 36 g | 7 g | 3 g | 345 | within limit |
| Cheesy Chicken Street Tacos | Dinner | 400 | 374 | 30 g | 40 g | 10 g | 6 g | 374 | within limit |
| Crispy Chicken Quesadilla | Dinner | 400 | 382 | 35 g | 27 g | 14 g | 2 g | 382 | within limit |
| Cheesy Chicken Enchilada Bake | Makes 2 servings | 400 | 344 | 32 g | 28 g | 11 g | 4 g | 344 | within limit |
| Chicken Burrito Bowl | Dinner | 400 | 340 | 30 g | 36 g | 8 g | 5 g | 340 | within limit |
| Taco-Stuffed Baked Potato | Seasoned ground beef | 400 | 359 | 26 g | 35 g | 12 g | 4 g | 359 | within limit |
| Taco-Stuffed Baked Potato | Seasoned chicken | 400 | 331 | 30 g | 35 g | 8 g | 4 g | 331 | within limit |
| Loaded Chicken Nachos | Dinner | 400 | 352 | 27 g | 25 g | 16 g | 4 g | 395 | within limit |
| Cauliflower-Crust Cheese Pizza | Dinner | 400 | 315 | 19 g | 29 g | 13 g | 4 g | 315 | within limit |
| Cheesy Chicken Flatbread Pizza | Dinner | 400 | 338 | 28 g | 32 g | 10 g | 2 g | 338 | within limit |
| Thin-Crust Tortilla Pizza | Dinner | 400 | 242 | 13 g | 26 g | 9 g | 2 g | 323 | within limit |
| Salmon, Crispy Potatoes & Broccoli | Dinner | 400 | 316 | 24 g | 29 g | 12 g | 6 g | 316 | within limit |
| Salmon & Creamy Egg Noodles | Dinner | 400 | 306 | 25 g | 21 g | 13 g | 1 g | 306 | within limit |
| Cheesy Macaroni, Broccoli & Chicken | Dinner | 400 | 380 | 31 g | 38 g | 11 g | 4 g | 380 | within limit |
| Cheesy Chicken & Spinach Egg Noodles | Dinner | 400 | 328 | 30 g | 27 g | 11 g | 2 g | 328 | within limit |
| Garlic-Cheese Chicken & Asparagus | Dinner | 400 | 297 | 42 g | 8 g | 10 g | 3 g | 297 | within limit |
| Shrimp Mac and Cheese with Broccoli | Dinner | 400 | 350 | 30 g | 38 g | 9 g | 4 g | 350 | within limit |

Servings over their limit (base): 0

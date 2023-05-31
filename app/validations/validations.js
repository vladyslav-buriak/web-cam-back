import { body } from "express-validator";


export const formDataValidation = [
    body('name' , 'вкажіть ім я').optional().isLength({ min: 3 }),
    body('age').optional().isNumeric(),
    body('phone').optional().isString().isLength({ min: 5 })
];




// export const postCreateValidation = [
//     body("title", "Введіть заголовок статті").isLength({ min: 3 }).isString(),
//     body("text", "Введіть текст статті").isLength({ min: 3 }).isString(),
//     body("tags", "Невірний формат тегів").optional().isString(),
//     body("imageUrl", "Невірне посилання на картинку").optional().isString(),
// ];
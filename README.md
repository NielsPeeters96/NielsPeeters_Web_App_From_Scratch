# Ghibli Movies
 Simple web app that connects a API, retrieves data with javascript, and displays it on the front end of the website. The goal is to learn javascript syntaxes, datatypes and basic knowledge of working with JSON and javascript objects.

### Table of Contents

<table>
    <tr>
        <td align="center"><a href="#nerd_face-usage">Usage<a></td>
        <td align="center"><a href="#open_file_folder-folder-structure">Folder Structure<a></td>
        <td align="center"><a href="#package-api-endpoints-structure">API Structure<a></td>
        <td align="center"><a href="#memo-todo-list">Todo list<a></td>
    </tr>
</table>

## Usage

All movies from Ghibli API. Click on a movie title and it will show you the description, release date and producer.

## LiveLink
https://nielspeeters96.github.io/NielsPeetersWAFS/

### Screenshot

![Frontend ](https://github.com/NielsPeeters96/NielsPeeters_Web_App_From_Scratch/blob/main/img/Screenshot.png)

## Folder Structure

This projects uses **modules**. This helps your code to be more readable. Never worked with modules before so it will be a difficult task.

### Actor Diagram

![Actor Diagram](https://github.com/NielsPeeters96/NielsPeeters_Web_App_From_Scratch/blob/main/img/Actor Diagram.png) 

### Interaction Diagram

![Interaction Diagram]() **still in development**

## API Endpoints Structure

What's inside the API (structure/objects).

The documentation and all the (interactive) endpoints kan be found [here](https://ghibliapi.herokuapp.com/#section/Studio-Ghibli-API).

Example below:

### Films

This endpoint is used to fetch movies, producers, release dates and the description

#### Parameters

_id_: **2baf70d1-42bb-4437-b551-e5fed5a87abe**
_title_: **Castle in the sky**
_producer_: **Isao Takahata**
_release_date_: **1986**

#### Output

```json
{
    "Films": [
        {
            "id": "2baf70d1-42bb-4437-b551-e5fed5a87abe",
            "title": "Castle in the Sky",
            "description": "The orphan Sheeta inherited a mysterious crystal that links her to the mythical sky-kingdom of Laputa. With the help of resourceful Pazu and a rollicking band of sky pirates, she makes her way to the ruins of the once-great civilization. Sheeta and Pazu must outwit the evil Muska, who plans to use Laputa's science to make himself ruler of the world.",
            "director": "Hayao Miyazaki",
            "producer": "Isao Takahata",
            "release_date": "1986",
            "rt_score": "95"
        },
        {
            "id": "12cfb892-aac0-4c5b-94af-521852e46d6a",
            "title": "Grave of the Fireflies",
            "description": "In the latter part of World War II, a boy and his sister, orphaned when their mother is killed in the firebombing of Tokyo, are left to survive on their own in what remains of civilian life in Japan. The plot follows this boy and his sister as they do their best to survive in the Japanese countryside, battling hunger, prejudice, and pride in their own quiet, personal battle.",
            "director": "Isao Takahata",
            "producer": "Toru Hara",
            "release_date": "1988",
            "rt_score": "97"
        },
    ]
}
```
## Todo list

-   [x] **Connect with API**.

-   [x] **Create a solid fetch function**.

-   [x] **Show the movies on your homepage**

-   [x] **Add Routie**. 

-   [x] **Add ahref links to the homepage**. 

-   [x] **Add modules** 

-   [ ] **When you click on a movie you'll get directed to the detailpage**

-   [ ] **Add map function**

-   [ ] **Show only the description on the detailpage**

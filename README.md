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
https://nielswafs.netlify.app/index.html

### Screenshot

![image](https://user-images.githubusercontent.com/78353674/117794962-040baf80-b24e-11eb-9a7e-26ba71c5c98b.png)

## Folder Structure

This projects uses **modules**. This helps your code to be more readable. Never worked with modules before so it will be a difficult task.

### Actor Diagram

![Actor Diagram](https://github.com/NielsPeeters96/NielsPeetersWAFS/blob/main/img/Actor_diagram.png) 

### Interaction Diagram

![Interaction Diagram](https://github.com/NielsPeeters96/NielsPeetersWAFS/blob/main/img/Interaction_diagram.png)

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

```json
{
    "People": [
        {
            "id": "ba924631-068e-4436-b6de-f3283fa848f0",
            "name": "Ashitaka",
            "gender": "male",
            "age": "late teens",
            "eye_color": "brown",
            "hair_color": "brown",
            "films": [],
            "species": "https://ghibliapi.herokuapp.com/species/af3910a6-429f-4c74-9ad5-dfe1c4aa04f2",
            "url": "https://ghibliapi.herokuapp.com/people/ba924631-068e-4436-b6de-f3283fa848f0"
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

-   [x] **When you click on a movie you'll get directed to the detailpage**

-   [x] **Add filter function**

-   [x] **Show only the description, release date and director on the detailpage**


## Expansion (resit)
- Feedback to the user

I've added a new homepage and placed a button on each page that will take you back to the homepage. When you arrive at the landing page you immediately see that you can look up information about films and the employees. In addition, I also used other colors and fonts as before to create a clearer image.

- Added extra end point

Besides the homepage I also added a second endpoint 'People'. Here you can look up information about certain employees and what they look like. I added this to show that it is not a simple application with only 1 endpoint.

- Changed Lay-out

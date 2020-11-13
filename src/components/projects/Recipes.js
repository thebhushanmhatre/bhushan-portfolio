import React, { useState } from 'react';
import { Card, Collapse, CardText, CardBody, CardTitle, CardSubtitle, Container, Breadcrumb, BreadcrumbItem, Input, Button, Row, Col, Alert } from 'reactstrap';

// InputForm
function InputForm(props) {
  const [input, setInput] = useState('')
  const onKeyPress = (e) => {
    if (e.which === 13) {
      sendDish()
    }
  }

  const sendDish = () => {
    props.getDish(input)
    setInput('')
  }

  return (
    <Row className="bg-dark text-light text-center"
      style={{ paddingTop: 20, paddingLeft: 5, paddingBottom: 10, alignItems: 'center' }}>
      <Col sm='12' md='3' lg='3' className='mb-2'>
        <i className="fa fa-cutlery fa-lg" aria-hidden="true"> Recipes App</i>
      </Col>
      <Col sm='12' md='6' lg='7' className='mb-2'>
        <Input autoFocus={true} type="name" name="recipename" id="recipename"
          onChange={e => setInput(e.value)} onKeyPress={onKeyPress}
          placeholder="Search Recipe . . ." value={input} />
      </Col>
      <Col sm='12' md='3' lg='2' className='mb-2 text-center'>
        <Button type="submit" color="primary" onClick={sendDish}>
          <i className="fa fa-search fa-sm" aria-hidden="true"> Submit</i>
        </Button>
      </Col>
    </Row>
  )
}

//Footer
function Footer() {
  return (
    <div className='fixed-bottom container bg-dark text-light' style={{ textAlign: 'center', paddingTop: 10 }} >
      <p style={{ fontSize: 20 }}>Powered by
        <i> <a className="text-light" href="https://www.themealdb.com/api.php">themealdb.com</a> </i>
      & <i> <a className="text-light" href="https://github.com/thebhushanmhatre/food-recipe-app">Bhushan Mhatre</a></i>
      </p>
    </div>
  )
}

// example
const example = [{
  dateModified: null,
  idMeal: "52787",
  strArea: "American",
  strCategory: "Dessert",
  strDrinkAlternate: null,
  strIngredient1: "Chocolate Chips",
  strIngredient2: "Heavy Cream",
  strIngredient3: "Condensed Milk",
  strIngredient4: "Vanilla Extract",
  strIngredient5: "White Chocolate Chips",
  strIngredient6: "Miniature Marshmallows",
  strIngredient7: "",
  strIngredient8: "",
  strIngredient9: "",
  strIngredient10: "",
  strIngredient11: "",
  strIngredient12: "",
  strIngredient13: "",
  strIngredient14: "",
  strIngredient15: "",
  strIngredient16: "",
  strIngredient17: "",
  strIngredient18: "",
  strIngredient19: "",
  strIngredient20: "",
  strInstructions: "Line an 8-inch-square baking pan with wax paper or foil, and coat with non-stick spray. In a microwave-safe bowl, combine the dark chocolate chips, heavy cream and half of the sweetened condensed milk. Microwave the dark chocolate mixture in 20-second intervals, stirring in between each interval, until the chocolate is melted. Add the vanilla extract to the dark chocolate mixture and stir well until smooth. Transfer the dark chocolate mixture into the prepared pan and spread into an even layer. In a separate bowl, combine the white chocolate chips with the remaining half of the sweetened condensed milk. Microwave the white chocolate mixture in 20-second intervals, stirring in between each interval, until the chocolate is melted. Evenly spread the white chocolate mixture on top of dark chocolate layer. Top the chocolate layers with the Mallow Bits or miniature marshmallows, and gently press them down. Refrigerate for 4 hours, or until set. Remove the fudge and wax paper from the pan. Carefully peel all of the wax paper from the fudge. Cut the fudge into bite-sized pieces and serve.",
  strMeal: "Hot Chocolate Fudge",
  strMealThumb: "https://www.themealdb.com/images/media/meals/xrysxr1483568462.jpg",
  strMeasure1: "2 cups",
  strMeasure2: "2 tbs",
  strMeasure3: "1 – 14-ounce can",
  strMeasure4: "1 tsp",
  strMeasure5: "1-⅓ cups",
  strMeasure6: "1-½ cups",
  strMeasure7: "",
  strMeasure8: "",
  strMeasure9: "",
  strMeasure10: "",
  strMeasure11: "",
  strMeasure12: "",
  strMeasure13: "",
  strMeasure14: "",
  strMeasure15: "",
  strMeasure16: "",
  strMeasure17: "",
  strMeasure18: "",
  strMeasure19: "",
  strMeasure20: "",
  strSource: "",
  strTags: "Snack,Chocolate",
  strYoutube: "https://www.youtube.com/watch?v=oJvbsVSblfk"
}]

// DisplayItems
function DisplayItems(props) {
  var itemList = props.items.meals.map(i => {
    return <RenderItem item={i} />
  })
  return (
    <div>
      <div>{itemList}</div>
      <p style={{ fontSize: 20 }}>{props.items.message}</p>
    </div>
  )
}

// Single Element
function RenderItem({ item }) {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const getElements = (item) => {
    let nums = Array.from(Array(20).keys())
    let elements = []
    nums.forEach(i => {
      let element = item['strIngredient' + (i + 1)]
      let quantity = item['strMeasure' + (i + 1)]
      if (element)
        elements.push(element + " -> " + quantity)
    })
    return [...elements.filter(x => x)].map(p => <li>{p}.</li>)
  }

  const getSteps = (item) => {
    let steps = item.strInstructions.split('.')
    return [...steps.filter(x => x)].map(p => <li>{p}.</li>)
  }

  return (
    <Card style={{ margin: 10 }}>
      <CardBody>
        <CardTitle><h3>{item.strMeal}</h3></CardTitle>
        {(item.strTags) &&
          <CardSubtitle>{item.strTags.split(',').join(', ')}</CardSubtitle>
        }
        <Button color="primary" onClick={toggle} style={{ marginTop: 10, marginBottom: 10 }}>
          <i className="fa fa-align-justify fa-lg" aria-hidden="true"> See Recipe</i></Button>
        <a href={item.strYoutube} target="_blank" rel="noopener noreferrer">
          <Button color="danger" onClick={toggle} style={{ margin: 10 }}>
            <i className="fa fa-youtube-play fa-lg" aria-hidden="true"> Watch</i>
          </Button>
        </a>
        <Collapse isOpen={isOpen}>
          <CardText><u>Ingredients required:</u><ul>{getElements(item)}</ul></CardText>
          <CardText><u>Instructions:</u> <ol>{getSteps(item)}</ol></CardText>
        </Collapse>
      </CardBody>
    </Card>
  )
}

//Popular Items
function PopularItems(props) {
  let popular_items = ['Chocolate', 'Soup', 'Cake', 'Fish', 'Chicken'].map(item => {
    return <Button type="submit" color="success" className="m-1"
      onClick={i => props.getPopularDish(item)}> {item} </Button>
  })

  return (
    <Alert color="success" style={{ marginTop: 20 }} >Some Popular Recipes : {popular_items}</Alert>
  )
}

// App
function Recipes() {
  const [data, setData] = useState({ meals: [example[0]] })
  const [input, setInput] = useState('')

  const getDish = async () => {
    let recipename = document.getElementById('recipename').value
    setInput(recipename)
    if (recipename != null && recipename.length > 0) {
      let url = "https://www.themealdb.com/api/json/v1/1/search.php?s=" + recipename
      let response = await fetch(url)
      let mealData = await response.json()
      if (mealData.meals != null) {
        setData(mealData)
      }
      else if (mealData.meals == null) {
        let msg = 'No Recipe found with name: "' + recipename + '"'
        setData({ meals: [], message: msg })
      }
    }
  }

  const getPopularDish = async (recipename) => {
    let url = "https://www.themealdb.com/api/json/v1/1/search.php?s=" + recipename
    let response = await fetch(url)
    let mealData = await response.json()
    setData(mealData)
    setInput(recipename)
  }

  const goHome = () => {
    setData({ meals: [example[0]] })
    setInput('')
  }

  return (
    <div className="container text-center bg-light">
      <Container>
        <InputForm getDish={getDish} />
        <Breadcrumb className='mt-2'>
          <BreadcrumbItem><a href="/">Home</a></BreadcrumbItem>
          <BreadcrumbItem><a href="/projects">Projects</a></BreadcrumbItem>
          <BreadcrumbItem><a href="/project/recipes" onClick={goHome}>Recipes</a></BreadcrumbItem>
          {(input.length > 0) &&
            <>
            <BreadcrumbItem active>{input}</BreadcrumbItem>
            </>
          }
        </Breadcrumb>
        {(data.meals == null || data.meals.length < 4) &&
          <PopularItems getPopularDish={getPopularDish} />
        }
        <div style={{ marginBottom: 70 }}>
          <DisplayItems items={data} input={input} goHome={goHome} />
        </div>
        <Footer />
      </Container>
    </div>
  )
}

export default Recipes;
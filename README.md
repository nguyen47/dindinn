# dindinn 

# How to run?

Step 1: Install all the dependencies by command:

```bash 
npm install
```

Step 2: Import the sql attached to mysql.

Step 3: Edit the connection string in `config/default.json`

```javascript
mysql://[username]:[password]@localhost:3306/[database]
```

Step 4: Config envionmenet variable

In Linux or MAC

```bash
export dindinn_jwtprivatekey=123456
```

# Endpoint

## Login Endpoint

All user's password are **123456***

`POST http://localhost:3000/api/auth`

Request: 

```javascript
{
	"email": "u2@luckyshine.xyz",
	"password": "123456"
}
```

Response:

`eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MzAwMSwiaWF0IjoxNTc3NjE5MTg5fQ.5NZvTkmr7z3TWmdi5OLKhStSpvinSv9B0VEOqFewrlQ`

## Treasures Endpoint

`POST http://localhost/api/treasures/find`

Header: 

```
Content-Type: application/json
x-auth-token: Token after login
```

Request:

```javascript
{
	"lat": 1.3273451,
	"long": 103.8756757,
	"distance": 1
}
```

Or 

```javascript
{
	"lat": 1.3273451,
	"long": 103.8756757,
	"distance": 10,
	"prize": 10
}
```

Reponse:

```javascript
[
    {
        "id": 105,
        "latitude": 1.33616189,
        "longtitude": 103.87708662,
        "Name": "T6",
        "amt": 15,
        "distance": 0.9928493184929048
    },
    {
        "id": 106,
        "latitude": 1.32552844,
        "longtitude": 103.86910143,
        "Name": "T7",
        "amt": 15,
        "distance": 0.758232972167774
    },
    {
        "id": 107,
        "latitude": 1.32303589,
        "longtitude": 103.87748154,
        "Name": "T8",
        "amt": 10,
        "distance": 0.5195148441344998
    },
    {
        "id": 108,
        "latitude": 1.33465304,
        "longtitude": 103.87044897,
        "Name": "T9",
        "amt": 15,
        "distance": 0.9989609729534366
    },
    {
        "id": 109,
        "latitude": 1.32606138,
        "longtitude": 103.87930069,
        "Name": "T10",
        "amt": 15,
        "distance": 0.42750718867853593
    },
    {
        "id": 113,
        "latitude": 1.32960595,
        "longtitude": 103.88079366,
        "Name": "T14",
        "amt": 10,
        "distance": 0.6220049600986302
    }
]
```

Or

```javascript
[
    {
        "id": 100,
        "latitude": 1.33125924,
        "longtitude": 103.89804864,
        "Name": "T1",
        "amt": 15,
        "distance": 2.524882886415063
    },
    {
        "id": 101,
        "latitude": 1.32255754,
        "longtitude": 103.89430855,
        "Name": "T2",
        "amt": 10,
        "distance": 2.1386406884194984
    },
    {
        "id": 102,
        "latitude": 1.3166356,
        "longtitude": 103.88912254,
        "Name": "T3",
        "amt": 15,
        "distance": 1.9111773426331902
    },
    {
        "id": 103,
        "latitude": 1.31286055,
        "longtitude": 103.85455645,
        "Name": "T4",
        "amt": 15,
        "distance": 2.847085631478396
    },
    {
        "id": 104,
        "latitude": 1.34439896,
        "longtitude": 103.87659381,
        "Name": "T5",
        "amt": 10,
        "distance": 1.8990472635695672
    },
    {
        "id": 105,
        "latitude": 1.33616189,
        "longtitude": 103.87708662,
        "Name": "T6",
        "amt": 15,
        "distance": 0.9928493184929048
    },
    {
        "id": 106,
        "latitude": 1.32552844,
        "longtitude": 103.86910143,
        "Name": "T7",
        "amt": 15,
        "distance": 0.758232972167774
    },
    {
        "id": 107,
        "latitude": 1.32303589,
        "longtitude": 103.87748154,
        "Name": "T8",
        "amt": 10,
        "distance": 0.5195148441344998
    },
    {
        "id": 108,
        "latitude": 1.33465304,
        "longtitude": 103.87044897,
        "Name": "T9",
        "amt": 15,
        "distance": 0.9989609729534366
    },
    {
        "id": 109,
        "latitude": 1.32606138,
        "longtitude": 103.87930069,
        "Name": "T10",
        "amt": 15,
        "distance": 0.42750718867853593
    },
    {
        "id": 110,
        "latitude": 1.25886946,
        "longtitude": 103.89887904,
        "Name": "T11",
        "amt": 10,
        "distance": 8.039196339540984
    },
    {
        "id": 111,
        "latitude": 1.26973345,
        "longtitude": 103.8810448,
        "Name": "T12",
        "amt": 15,
        "distance": 6.433868217256875
    },
    {
        "id": 112,
        "latitude": 1.32914713,
        "longtitude": 103.8334781,
        "Name": "T13",
        "amt": 15,
        "distance": 4.695175965241883
    },
    {
        "id": 113,
        "latitude": 1.32960595,
        "longtitude": 103.88079366,
        "Name": "T14",
        "amt": 10,
        "distance": 0.6220049600986302
    },
    {
        "id": 114,
        "latitude": 1.33700251,
        "longtitude": 103.84922492,
        "Name": "T15",
        "amt": 15,
        "distance": 3.130351803987957
    },
    {
        "id": 115,
        "latitude": 1.27845714,
        "longtitude": 103.85717615,
        "Name": "T16",
        "amt": 15,
        "distance": 5.812090871688782
    },
    {
        "id": 116,
        "latitude": 1.36019784,
        "longtitude": 103.85635821,
        "Name": "T17",
        "amt": 10,
        "distance": 4.237479068109813
    },
    {
        "id": 117,
        "latitude": 1.31551921,
        "longtitude": 103.8632839,
        "Name": "T18",
        "amt": 15,
        "distance": 1.9044114442712277
    }
]
```

# Demo

Heroku Endpoint
[https://dindinn.herokuapp.com](https://dindinn.herokuapp.com)

**Note: If there is no web traffic in 30 minutues, Heroku push into sleep time during free plan policy. Please tell me if the Heroku not working**

# HTTP Basics

1. Client Request  
2. Server Response  

---

# HTTP Response Status Codes

HTTP status codes are grouped into 5 categories:

| Range | Category |
|---|---|
| `100–199` | Informational Responses |
| `200–299` | Successful Responses |
| `300–399` | Redirection Messages |
| `400–499` | Client Error Responses |
| `500–599` | Server Error Responses |

---

## 1. Informational Responses (100–199)

- `100 Continue`
- `101 Switching Protocols`
- `103 Early Hints`

---

## 2. Successful Responses (200–299)

### ⭐ Most Common & Important

| Code | Meaning |
|---|---|
| `200 OK` | Request succeeded |
| `201 Created` | Resource successfully created |
| `204 No Content` | Success but no response body |

### Other Successful Responses

- `202 Accepted`
- `203 Non-Authoritative Information`
- `205 Reset Content`
- `206 Partial Content`
- `207 Multi-Status`
- `208 Already Reported`
- `226 IM Used`

---

## 3. Redirection Messages (300–399)

### ⭐ Most Common & Important

| Code | Meaning |
|---|---|
| `301 Moved Permanently` | Permanent redirect |
| `302 Found` | Temporary redirect |
| `304 Not Modified` | Browser cache can be used |
| `307 Temporary Redirect` | Temporary redirect preserving method |
| `308 Permanent Redirect` | Permanent redirect preserving method |

### Other Redirection Responses

- `300 Multiple Choices`
- `303 See Other`
- `305 Use Proxy`
- `306 Unused`

---

## 4. Client Error Responses (400–499)

### ⭐ Most Common & Important

| Code | Meaning |
|---|---|
| `400 Bad Request` | Invalid request from client |
| `401 Unauthorized` | Authentication required |
| `403 Forbidden` | Access denied |
| `404 Not Found` | Resource does not exist |
| `405 Method Not Allowed` | HTTP method not supported |
| `408 Request Timeout` | Client took too long |
| `409 Conflict` | Request conflicts with current state |
| `429 Too Many Requests` | Rate limit exceeded |

### Other Client Errors

- `402 Payment Required`
- `406 Not Acceptable`
- `407 Proxy Authentication Required`
- `410 Gone`
- `411 Length Required`
- `412 Precondition Failed`
- `413 Payload Too Large`
- `414 URI Too Long`
- `415 Unsupported Media Type`
- `416 Range Not Satisfiable`
- `417 Expectation Failed`
- `418 I'm a teapot`
- `421 Misdirected Request`
- `422 Unprocessable Content`
- `423 Locked`
- `424 Failed Dependency`
- `425 Too Early`
- `426 Upgrade Required`
- `428 Precondition Required`
- `431 Request Header Fields Too Large`
- `451 Unavailable For Legal Reasons`

---

## 5. Server Error Responses (500–599)

### ⭐ Most Common & Important

| Code | Meaning |
|---|---|
| `500 Internal Server Error` | Generic server failure |
| `502 Bad Gateway` | Invalid response from upstream server |
| `503 Service Unavailable` | Server temporarily unavailable |
| `504 Gateway Timeout` | Upstream server timeout |

### Other Server Errors

- `501 Not Implemented`
- `505 HTTP Version Not Supported`
- `506 Variant Also Negotiates`
- `507 Insufficient Storage`
- `508 Loop Detected (WebDAV)`
- `510 Not Extended`
- `511 Network Authentication Required`

---

# Browser Support Overview

| Feature | Chrome | Edge | Firefox | Opera | Safari | Chrome Android | Firefox Android | Opera Android | Safari iOS | Samsung Internet | WebView Android | WebView iOS |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| `103 Early Hints` | 103 | 103 | 120 | 89 | 17 | 103 | 120 | 71 | 17 | 20 | 103 | 17 |
| `rel=preconnect` | 103 | 103 | 120 | 89 | 17 | 103 | 120 | 71 | 17 | 20 | 103 | 17 |
| `rel=preload` | 103 | 103 | 123 | 89 | No | 103 | 123 | 71 | No | 20 | 103 | No |
| `308 Permanent Redirect` | 36 | 12 | 14 | 24 | 7 | 36 | 14 | 24 | 7 | 3 | 37 | 7 |
| `425 Too Early` | No | No | 58 | No | No | No | 58 | No | No | No | No | No |

---

# Quick Notes

## ⭐ Frequently Used Status Codes

| Code | Usage |
|---|---|
| `200` | Successful API response |
| `201` | Created new resource |
| `301` | Permanent redirect |
| `302` | Temporary redirect |
| `304` | Browser caching |
| `400` | Invalid request |
| `401` | Login/authentication needed |
| `403` | Permission denied |
| `404` | Page/resource not found |
| `429` | Too many API requests |
| `500` | Server crashed or failed |
| `503` | Server overloaded/down |

---

## Tips

- `2xx` → Success
- `3xx` → Redirect
- `4xx` → Client made a mistake
- `5xx` → Server made a mistake
- `404` and `500` are the most commonly seen errors
- `429` is common in APIs with rate limiting
import requests

def test_api_is_working():
    response = requests.get("https://catfact.ninja/fact")

    print("New API Status Code:", response.status_code)
    print("Response:", response.text)

    assert response.status_code == 200, f"Expected 200 but got {response.status_code}"




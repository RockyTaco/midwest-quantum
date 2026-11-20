import base64
import os

def get_data_uri(path):
    with open(path, "rb") as f:
        data = f.read()
    b64 = base64.b64encode(data).decode("utf-8")
    if path.endswith(".svg"):
        mime = "image/svg+xml"
    elif path.endswith(".jpg") or path.endswith(".jpeg"):
        mime = "image/jpeg"
    else:
        mime = "image/png"
    return f"data:{mime};base64,{b64}"

mqw_logo = get_data_uri("public/MQW_light_grad_black.png")
ng_logo = get_data_uri("public/images/northrop_grumman_official.png")
infleqtion_logo = get_data_uri("public/images/infleqtion_official.svg")
bluequbit_logo = get_data_uri("public/images/bluequbit_official.svg")
ibm_logo = get_data_uri("public/images/ibm_official.png")
qciti_logo = get_data_uri("public/images/qciti_logo.png")

print("All URIs generated successfully.")

from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
import json

from django.shortcuts import render

def index(request):
    return render(request, "index.html")

@csrf_exempt
def analyze(request):
    if request.method == "POST":
        # Parse JSON data
        data = json.loads(request.body)
        djtext = data.get("text", "")
        removepunc = data.get("RemovePunctuations", "off")
        uppercase = data.get("UPPERCASE", "off")
        removenewl = data.get("RemoveNewLine", "off")
        removeextraspace = data.get("RemoveExtraSpaces", "off")
        charcount = data.get("CharCount", "off")

        # Process the text based on options
        analyzed_text = djtext
        if removepunc == "on":
            analyzed_text = "".join(char for char in analyzed_text if char not in """!#$%&()`*+,-./:;<=>@[\]^_?{|}~"'""")
        if uppercase == "on":
            analyzed_text = analyzed_text.upper()
        if removenewl == "on":
            analyzed_text = analyzed_text.replace("\n", "").replace("\r", "")
        if removeextraspace == "on":
            # Remove all spaces but keep newlines
            analyzed_text = analyzed_text.replace(" ", "")

        # Calculate character count if requested
        character_count = f"Number of Characters: {len(analyzed_text)}" if charcount == "on" else None

        return JsonResponse({"analyzed_text": analyzed_text, "character_count": character_count})

    return JsonResponse({"error": "Invalid request"}, status=400)

from django.shortcuts import render
from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from rest_framework.permissions import AllowAny
from .serializers import PostSerializer
from .models import UserPost

@api_view(['GET'])
def apiOverview(request):
    api_urls = {
        "List": "/post-list/",
        "Detail View": "/post-detail/<str:pk>/",
        "Create": "/post-create/",
        "Update": "post-update/<str:pk>/",
        "Delete": "post-delete/<str:pk>/"
    }

    return Response(api_urls)

@api_view(['GET'])
@permission_classes([AllowAny])
def postList(request):
    user_posts = UserPost.objects.all().order_by('-date_posted')
    serializer = PostSerializer(user_posts, many=True)
    return Response(serializer.data)

@api_view(['GET'])
@permission_classes([AllowAny])
def postDetail(request, pk):
    user_posts = UserPost.objects.get(id=pk)
    serializer = PostSerializer(user_posts, many=False)
    return Response(serializer.data)

@api_view(['POST'])
@permission_classes([AllowAny])
def postCreate(request):
    serializer = PostSerializer(data=request.data)

    if serializer.is_valid():
        serializer.save()
    return Response(serializer.data)

@api_view(['POST'])
@permission_classes([AllowAny])
def postUpdate(request, pk):
    user_post = UserPost.objects.get(id=pk)
    serializer = PostSerializer(instance=user_post, data=request.data)

    if serializer.is_valid():
        serializer.save()

    return Response(serializer.data)

@api_view(['DELETE'])
@permission_classes([AllowAny])
def postDelete(request, pk):
    user_post = UserPost.objects.get(id=pk)
    user_post.delete()

    return Response("Deleted Successfully!")



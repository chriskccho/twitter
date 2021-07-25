from django.db import models
from django.contrib.auth.models import AbstractUser

# Create your models here.
class User(AbstractUser):
    pass

class Tweet(models.Model):
    tweet = models.CharField(max_length=280)
    date = models.DateTimeField(auto_now_add=True)
    user = models.CharField(max_length=100)
    usertest = models.ForeignKey(User, on_delete=models.CASCADE, related_name="this_tweets", null=True)

    def __str__(self):
        return self.tweet


